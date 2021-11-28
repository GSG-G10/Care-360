const hashPassword = require('./hashPassword');
const schema = require('./signupValidation');
const comparePasswords = require('./comparePassword');
const loginValidation = require('./loginSchema');

module.exports = {
  hashPassword,
  schema,
  comparePasswords,
  loginValidation,
};
