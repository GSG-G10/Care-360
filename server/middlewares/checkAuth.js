const { verifyToken } = require('../utils');

const checkAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new Error('You are not verified');
  }
  const decoded = await verifyToken(token, process.env.SECRET_KEY);
  req.userObj = decoded;
  next();
};

module.exports = checkAuth;
