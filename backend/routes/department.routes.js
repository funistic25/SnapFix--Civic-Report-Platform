import express from "express";
import {
  allReports,
  assignTechnician,
  getAllTechnicians,
  SingleReport,
  loginDept,
  newTech,
  checkAuth,
  signup,
  taskAssigned
} from "../controllers/department.controller.js";
import { protectRoute } from "../middlewares/department.auth.js";

const deptRouter = express.Router();

deptRouter.post("/signup", signup) //works
deptRouter.post("/loginDept", loginDept); //works
deptRouter.get("/allreports",protectRoute, allReports); // works
deptRouter.get("/singleReport/:id",protectRoute, SingleReport); //works
deptRouter.patch("/assignTechnician/:reportId/:technicianId",protectRoute, assignTechnician); //works
deptRouter.get("/allTechnicians", protectRoute, getAllTechnicians); //works
deptRouter.get("/checkAuth", protectRoute, checkAuth); 

deptRouter.post("/assignTechnician/:id/assign", protectRoute, taskAssigned)
deptRouter.get("/createTechnician",protectRoute, newTech); //works

export default deptRouter;
