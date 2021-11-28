const { verifyToken } = require('../utils/jwt');

const userVerify = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (token) {
      const { userId } = await verifyToken(token, process.env.SECRET_KEY);
      req.userId = userId;
      return next();
    }
    return res.status(401).json({ message: 'not autharized' });
  } catch (err) {
    return next(err);
  }
};
module.exports = userVerify;
