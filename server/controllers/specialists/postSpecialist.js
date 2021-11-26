const addSpecialistSchema = require('../../utils/validation');
const uploadImage = require('../../utils/cloudinary');

const { addSpecialist, checkSpecialistEmail } = require('../../database/queries');

const postSpecialist = async (req, res, next) => {
  try {
    await addSpecialistSchema.validateAsync(req.body);
    const specialist = await checkSpecialistEmail(req.body.email);

    if (specialist) {
      return res.status(403).json({ error: { message: 'Specialist is already exists' } });
    }
    req.body.image = await uploadImage(req.body.image);
    req.body.education = JSON.stringify(req.body.education);
    req.body.experience = JSON.stringify(req.body.experience);
    req.body.treatment = JSON.stringify(req.body.treatment);
    const newSpecialist = await addSpecialist(req.body);
    return res.status(201).json(newSpecialist);
  } catch (err) {
    if (err.details) {
      err.status = 400;
    }
    return next(err);
  }
};

module.exports = postSpecialist;
