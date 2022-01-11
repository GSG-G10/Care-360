const addSpecialistSchema = require('../../utils/validation');

const {
  addSpecialist,
  checkSpecialistEmail,
} = require('../../database/queries');

const postSpecialist = async (req, res, next) => {
  try {
    await addSpecialistSchema.validateAsync(req.body);
    const specialist = await checkSpecialistEmail(req.body.email);
    if (specialist) {
      return res.json({ message: 'Doctor is already exists' });
    }
    const newSpecialist = await addSpecialist(req.body);
    if (newSpecialist === 'INSERT') {
      return res.send(true);
    }
  } catch (err) {
    if (err.details) {
      err.status = 400;
    }
    return next(err);
  }
};

module.exports = postSpecialist;
