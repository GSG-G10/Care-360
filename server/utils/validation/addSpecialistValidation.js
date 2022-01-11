const joi = require('joi');

module.exports = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().alphanum().min(6).required(),
  specialty: joi.string().required(),
  center_name: joi.required(),
  clinic_location: joi.required(),
  phone_number: joi.string().required(),
  education: joi.string().required(),
  experience: joi.string().required(),
  treatments: joi.string().required(),
  image: joi.string().required(),
});
