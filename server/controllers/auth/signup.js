const { addNewUser } = require('../../database/queries');
const { hashPassword } = require('../../utils');

const signup = async (req, res, next) => {
  const {
    name, email, password, identity_number,
  } = req.userObj;
  try {
    const hashedPassword = await hashPassword(password);
    const { rows } = await addNewUser(
      name,
      email,
      hashedPassword,
      identity_number,
    );
    const { id, is_admin } = rows[0];
    req.id = id;
    req.name = name;
    req.isAdmin = is_admin;
    res.json({ message: 'sign up successfully' });
    next();
  } catch (error) {
    res.status(403).json({ message: error });
  }
};
module.exports = signup;
