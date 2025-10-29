import Report from "../models/report.model.js";
import { getDepartmentAndPriority } from "../utils/Priority.js";

//rpt-001,rpt-002,etc
export const createReport = async (req, res) => {
   try {
      const { title, description } = req.body;
      const userId = req.user._id;

      const location = typeof req.body.location === "string" ? JSON.parse(req.body.location) : req.body.location;


    const { priority, deptName } = getDepartmentAndPriority(title);
    console.log(deptName);
    
      const reportCount = await Report.countDocuments({ deptName });

    // Create new reportId (pad with leading zeros)
    const newReportId = `RPT-${String(reportCount + 1).padStart(3, "0")}`;



      const newReport = new Report({
        reportId: newReportId,
        userId,
        title,
        description,
        imageUrl: req.files?.image ? req.files.image[0].path : undefined,
        location,
        priority,
        deptName
        // audioUrl: req.files?.audio ? req.files.audio[0].path : undefined,
      });

      await newReport.save();
      console.log("bcked");
      
      res.json({success:true, message: "Report created successfully", report: newReport });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong",success: false });
    }
};

//all reports for a user
export const allReports = async(req, res) =>{
   try {
    const userId = req.user._id; // from JWT auth middleware
if(!userId){
  return res.json({ success: false, message: "user not authenticated" });
}
    // Find all reports for this user
    const reportDetails = await Report.find({ userId }).select("_id reportId title location status priority createdAt").sort({ createdAt: -1 });
    
    if(!reportDetails){
      return res.json({success:false, message: "no reports"})
    }

    return res.json({ success: true,  reportDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" ,success: false});
  }
}


export const singleReport = async(req, res)=> {
  const id = req.params.id;
  const userId = req.user._id; // from JWT auth middleware
  try {
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Provide report id properly" });
    }
    if (!userId) {
      return res.json({ success: false, message: "user not authenticated" });
    }

    const report = await Report.findById(id);
    if (!report) {
      return res
        .status(404)
        .json({ success: false, message: "Report not found" });
    }
    return res.json({ success: true, report, message: "report found" });
  } catch (error) {
    res.status(500).json({ error: error.message, success: false });
  }
}

