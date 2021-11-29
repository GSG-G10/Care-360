const joi = require('joi');

module.exports = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().alphanum().min(6).required(),
  specialty: joi.string().required(),
  center_name: joi.required(),
  clinic_location: joi.required(),
  phone_number: joi.string().required(),
  education: joi.array().required(),
  experience: joi.array().required(),
  treatments: joi.array().required(),
  image: joi.string().required(),
});
