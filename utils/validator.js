const Joi = require('@hapi/joi');

exports.registerSchema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(6).required()
});

exports.jobSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required()
});
