import express from "express";
import authTechnician from "../middlewares/authTechnician.js";
import {alltasks, startTask, resolveTask, logintech, singletask, checkAuth, signup} from "../controllers/technician.controller.js"
import { uploadTechnician } from "../config/cloudinary.js";
const router = express.Router()

router.post("/signup", signup)
router.post("/login",  logintech) //works 
router.get("/alltasks", authTechnician, alltasks) //works 
router.get("/task/:id", authTechnician, singletask); //works 
router.patch("/task/:id/start", authTechnician, startTask) //works 
router.patch("/task/:id/resolve", authTechnician, uploadTechnician.single("photo"), resolveTask) //works
router.get("/checkAuth",authTechnician, checkAuth) //works

export default router;