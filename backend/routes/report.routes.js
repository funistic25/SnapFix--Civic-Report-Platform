import express from "express";
const router = express.Router();

import { allReports, createReport, singleReport } from "../controllers/report.controller.js";
import auth from "../middlewares/auth.js"
import { uploadreport } from "../middlewares/uploadreport.js";
import { checkAuth } from "../controllers/user.controller.js";


router.post("/create",auth, uploadreport, createReport); //need to check
router.get("/myReports", auth, allReports) //works
router.get("/singleReport/:id", auth, singleReport) //works

export default router;
