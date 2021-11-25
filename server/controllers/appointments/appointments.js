const { getAppontId } = require('../../database/queries/index');

const appointmentsId = async (req, res, next) => {
  try {
    const appointment = await getAppontId(req.params.id);
    return res.json(appointment);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  appointmentsId,
};
