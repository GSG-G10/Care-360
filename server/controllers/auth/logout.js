const logout = (req, res) => {
  res.clearCookie('authorization').json({ message: 'logged out successfully' });
};

module.exports = logout;
