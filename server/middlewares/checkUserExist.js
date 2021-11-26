const { checkEmail } = require('../database/queries');
const { schema } = require('../utils');

const checkUserExist = async (req, res, next) => {
  try {
    const userObj = await schema.validateAsync(req.body);
    const { email } = userObj;
    const result = await checkEmail(email);
    if (result.rowCount > 0) {
      res.status(400).json({ message: 'This email is already used.' });
    } else {
      req.userObj = userObj;
      next();
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = checkUserExist;
