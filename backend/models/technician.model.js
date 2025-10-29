import mongoose from "mongoose"

const technicianSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String},
    phoneNo: {type: String},
    deptName: {type: String, required: true},
    status: {type: String, enum: ["Available", "Busy", "Inactive"], default: "Available"},
    currentReports: {type: String},
    performance: {
        avgResolutionTime: {type: Number},
        rating: {type: Number},
        totalResolved: {type: Number}
    }
}, {timestamps: true});

const Technician = mongoose.model("Technician", technicianSchema)

export default Technician