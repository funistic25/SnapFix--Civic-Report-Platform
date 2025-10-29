import Technician from "../models/technician.model.js";
import generateToken from "../utils/generateToken.js";
import Report from "../models/report.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try{
    const { userName, email, password, deptName } = req.body;

    if (!userName || !password) {
      return res
        .status(400)
        .json({ message: "Missing Fields", success: false });
    }

    const existingUser = await Technician.findOne({ userName });

    if (existingUser) {
      return res.status(400).json({
        message: "Username Already Exists, try another one",
        success: false,
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const technician = new Technician({
      userName,
      email,
      deptName,
      password: hashedPass,
    });
    await technician.save();

    const payload = {
      id: technician._id,
      role: "technician",
    };
    const token = generateToken(payload);
    // Set the token in the Authorization header
    res.setHeader("Authorization", `Bearer ${token}`);
    res.setHeader("Access-Control-Expose-Headers", "Authorization");
    res
      .status(201)
      .json({  message: "Token Generated Successfully", success: true });
  }
  catch(error){
    return res.send({success:false, error: error.message})
  }
};

export const logintech = async (req, res) => {
  const { userName, password } = req.body;
  try {
    if (!userName || !password) {
      return res.status(400).json({
        message: !userName ? "Username required" : "Password required",
        success: false,
      });
    }
    const technician = await Technician.findOne({ userName });
    if (!technician) {
      return res
        .status(400)
        .json({ message: "Username not Found!", success: false });
    }
    const validPassword = await bcrypt.compare(password, technician.password);
    if(!validPassword){
      return res.send({success: false, message: "user credentials incorrect"})
    }
    const payload = {
      id: technician._id,
      role: "technician",
    };
    const token = generateToken(payload);

    // Set the token in the Authorization header
    res.setHeader("Authorization", `Bearer ${token}`);
    res.setHeader("Access-Control-Expose-Headers", "Authorization");
    return res
      .status(201)
      .json({ message: "Token Generated Successfully", success: true });
  }
  catch (error) {
    return res.send({success: false, error:message.error})
  }
  
};

export const alltasks = async (req, res) => {
  try {
    const assignedTechId = req.technicianId;

    //sort in ascending order 1 to 10, 10 highest priority
    const tasksAssigned = await Report.find({ assignedTechId }).select(
      "_id reportId title imageUrl location status priority createdAt"
    );

    const technician = await Technician.findById(assignedTechId);
    if (!technician) {
      return res
        .status(404)
        .json({ message: "Technician not found", success: false });
    }

    // Map priority strings to numbers for sorting
    const priorityMap = { Low: 1, Medium: 2, High: 3 };
    const sortedTasks = tasksAssigned.sort(
      (a, b) => priorityMap[a.priority] - priorityMap[b.priority]
    );

    res.json({
      technician: technician.userName,
      tasksAssigned: sortedTasks,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const singletask = async (req, res) => {
  const { id } = req.params;
  try {
    const assignedTechId = req.technicianId;

    const technician = await Technician.findById(assignedTechId);
    if (!technician) {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const report = await Report.findById(id);
    if (!report) {
      return res.status(404).json({ message: "Task not found" , success: false});
    }

    
    if (!report.assignedTechId.equals(assignedTechId)) {
      return res
        .status(403)
        .json({ message: "This task is not assigned to you", success: false });
    }
    return res.json({ success: true, report });
  } catch (error) {
    return res.status(403).json({ success: false, error: error.message });
  }
};

export const startTask = async (req, res) => {
  const { id } = req.params;

  try {
    const report = await Report.findById(id);

    if (!report) return res.status(404).json({ message: "Task not found" , success: false});

    // Ensure the technician is assigned to this task
    if (report.assignedTechId?.toString() !== req.technicianId.toString()) {
      return res.status(403).json({ message: "Not authorized for this task",success: false });
    }

    report.status = "In Progress";
    report.startedAt = new Date();
    await report.save();

    res.json({ message: "Task marked as In Progress", report,success: true });
  } catch (error) {
    console.error("Error starting task:", error);
    res.status(500).json({ message: "Server error",success: false });
  }
};


// PATCH /technician/tasks/:id/resolve → mark as Resolved
export const resolveTask = async (req, res) => {
  const { id } = req.params;

  try {
    const report = await Report.findById(id);

    if (!report)
      return res
        .status(404)
        .json({ message: "Task not found", success: false });

    if (report.assignedTechId?.toString() !== req.technicianId.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized for this task", success: false });
    }

    // Check if image is sent
    if (!req.file) {
      return res
        .status(400)
        .json({ message: "Resolved image is required", success: false });
    }

    // Save resolved image
    report.resolvedImageUrl = req.file.path || req.file.secure_url;
    report.status = "Resolved";
    report.resolvedTime = new Date();

    await report.save();

    res.json({
      success: true,
      message: "Task resolved successfully",
      report,
    });
  } catch (error) {
    console.error("Error resolving task:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export async function checkAuth(req, res) {
  return res.json({ success: true, techData: req.technician });
}