const jwt = require("jsonwebtoken");
const JWT_SECRET_CODE = require("../util/jwt-secret-code");

const isAuth = async (req) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return null;
  }

  const token = authHeader.split(" ")[1];
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, JWT_SECRET_CODE);
  } catch (error) {
    error.statusCode = 500;
    throw error;
  }

  if (!decodedToken) {
    return null;
  }

  if (decodedToken.userId) {
    return decodedToken.userId;
  }

  return decodedToken.lawyerId;
};

module.exports = isAuth;
