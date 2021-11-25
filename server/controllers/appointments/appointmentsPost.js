const { setUserBook } = require('../../database/queries/index');

const appointmentsPost = async (req, res, next) => {
  try {
    const appointment = await setUserBook(req.body);
    return res.json(appointment);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  appointmentsPost,
};
