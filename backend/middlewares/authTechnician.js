import jwt from "jsonwebtoken";
import Technician from "../models/technician.model.js"; // adjust path

const authTechnician = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ message: "Authorization token required", success: false });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    // Check if the technician exists
    const technician = await Technician.findById(decoded.id);
    if (!technician) {
      return res
        .status(401)
        .json({ message: "Technician not found", success: false });
    }

    // Attach technician info to request
    req.technicianId = technician._id;
    req.technician = technician;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token", success: false });
  }
};

export default authTechnician;
