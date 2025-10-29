import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";


export const signup = async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res.status(400).json({ message: "Missing Fields", success: false });
  }

  const existingUser = await User.findOne({ userName });

  if (existingUser) {
    return res.status(400).json({
      message: "Username Already Exists, try another one",
      success: false,
    });
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const newUser = new User({
    userName,
    password: hashedPass,
  });

  await newUser.save();

  const token = generateToken({
    _id: newUser._id,
    userName: newUser.userName,
  });
  // Set the token in the Authorization header
  res.setHeader("Authorization", `Bearer ${token}`);
  res.setHeader("Access-Control-Expose-Headers", "Authorization");
  return res
    .status(201)
    .json({ message: "Token Generated Successfully", success: true });
};

export const login = async (req, res) => {
  try{
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res.status(400).json({
      message: !userName ? "Username required" : "Password required",
      success: false,
    });
  }

  const user = await User.findOne({ userName });

  if (!user) {
    return res
      .status(400)
      .json({ message: "Username not Found!", success: false });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({
      message: "Invalid password",
      success: false,
    });
  }
  const token = generateToken({ _id: user._id, userName: user.userName });
  // Set the token in the Authorization header
  res.setHeader("Authorization", `Bearer ${token}`);
  res.setHeader("Access-Control-Expose-Headers", "Authorization");
  
  return res.status(201).json({  message: "Token Generated Successfully", success: true });
}
catch(error){
  return res.send({success:false, error:message.error})
}
};

export async function checkAuth(req, res) {
  const userData = await User.findById(req.user._id);
  if (!userData) {
    return res.send({ success: false, message: "user data not available" });
  }
  req.userData = userData;

  return res.json({ success: true, userData });
}