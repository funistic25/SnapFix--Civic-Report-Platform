import JWT from "jsonwebtoken";

const generateToken = (payload) => {
  return JWT.sign(payload, process.env.JWT_KEY);
};

export default generateToken;
