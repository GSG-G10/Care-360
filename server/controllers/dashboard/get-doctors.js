const getDoctors = require('../../database/queries/dashboard/getDoctors');

const doctorsAll = async (req, res, next) => {
  try {
    const users = await getDoctors();
    return res.json(users);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  doctorsAll,
};
