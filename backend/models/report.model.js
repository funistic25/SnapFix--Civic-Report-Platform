import mongoose from "mongoose"

const reportSchema = new mongoose.Schema(
  {
    reportId:{type:String, required: true},
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    location: {
      address: { type: String },
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
    description: { type: String, default: undefined },
    voiceUrl: { type: String, default: undefined },
    priority: { type: String, required: true, enum: ["High", "Medium", "Low"] },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Assigned", "Resolved"],
      default: "Pending",
    },
    deptName: { type: String, required: true },
    assignedTechId: { type: mongoose.Schema.Types.ObjectId, ref: "Technician" }, // linked technician
    startedAt: { type: Date, default: null },
    resolvedTime: { type: Date, default: null },
    resolvedImageUrl: { type: String, default: undefined },
    feedback: { type: String, default: null },
  },
  { timestamps: true }
);


const Report = mongoose.model("Report", reportSchema);

export default Report