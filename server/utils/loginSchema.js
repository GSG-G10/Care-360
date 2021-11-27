const Joi = require('joi');

const loginValidation = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'The email address cannot be empty',
    'any.required': 'Email Address Required',
  }),
  password: Joi.string().required().min(7)
    .messages({
      'string.empty': 'The password cannot be empty',
      'any.required': 'Password Required',
    }),
});

module.exports = loginValidation;
