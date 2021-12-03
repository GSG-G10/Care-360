const { getDoctor } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const doctor = await getDoctor(req.params.id);
    res.status(200).json(doctor);
  } catch (error) {
    next(error);
  }
};
