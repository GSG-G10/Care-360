const bcrypt = require('bcryptjs');
const { getUser } = require('../../database/queries');
const schema = require('../../utils/loginSchema');
const { signToken } = require('../../utils/jwt');

const login = async (req, res) => {
  try {
    const value = await schema.validateAsync(req.body);
    const { rows } = await getUser(value.email);
    const user = rows[0];
    if (!user) {
      throw new Error('This email is not used');
    }

    const validatedPassword = await bcrypt.compare(
      value.password,
      user.password,
    );

    if (!validatedPassword) {
      throw new Error('invalid email or password');
    }

    if (validatedPassword) {
      const token = await signToken(user, process.env.SECRET_KEY);
      res.cookie(
        'token',
        token,
        { maxAge: 1000 * 60 * 60 * 24 * 1 },
        { httpOnly: true },
      );
      res.status(200).json({ message: 'Logged in successfully' });
    } else {
      throw new Error('Incorrect password');
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = login;
