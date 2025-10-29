import jwt from "jsonwebtoken";
import Department from "../models/department.model.js";

export async function protectRoute(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Authorization token required", success: false });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    const department = await Department.findById(decoded.id);
    if (!department) {
      return res
        .status(401)
        .json({ message: "department not found", success: false });
    }

      req.deptId = department._id;
      req.department = department;
      next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Error Occured", success: false, error: error.message });
  }
}
