//importing packages
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

//importing files
import userRoutes from "./routes/user.routes.js";
import reportRoutes from "./routes/report.routes.js";
import technicianRoutes from "./routes/technician.routes.js";
import deptRouter from "./routes/department.routes.js"
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed", err);
  });

  
//Routes
app.use("/api/user", userRoutes);
app.use("/api/report", reportRoutes);
app.use("/api/technician", technicianRoutes);
app.use("/api/department", deptRouter)
// app.use("/reportAssign", assignTechnician)

app.get("/", (req, res)=>{
  res.send("working ");
})


// Your middleware & routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Check if running locally
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running locally on port ${PORT}`);
  });
}

// Export for Vercel
export default app;
