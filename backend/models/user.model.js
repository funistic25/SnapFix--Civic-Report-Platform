import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, unique: true, trim: true},
    password: {type: String, required: true},
    role: {type:String, required: true, default: "citizen"}
})

const User = mongoose.model("User", userSchema);

export default User;