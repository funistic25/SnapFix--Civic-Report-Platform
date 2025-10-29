import mongoose from "mongoose";

const departmentSchema = mongoose.Schema(
  {
    deptName: {
      type: String,
      enum: ["Water", "Electrical", "Animal Control", "Civil", "Sanitation"], // add more
      required: true,
    },
    deptHeadName: { type: String, required: true },
    password: { type: String, required: true },
    technicians: [{ type: mongoose.Schema.Types.ObjectId, ref: "Technician" }],
  },
  { timestamps: true }
);

const Department = mongoose.model("Department", departmentSchema);
export default Department;
