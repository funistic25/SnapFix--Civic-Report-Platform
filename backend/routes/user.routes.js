import express from "express"
import { signup, login, checkAuth } from "../controllers/user.controller.js";
import auth from "../middlewares/auth.js";

const router = express.Router();


router.post("/signup",signup); //works
router.post("/login",login); //works
router.get("/checkAuth", auth, checkAuth);

export default router;