const Joi = require("joi");

const validatedContactOnPost = (req, res, next) => {
  const { error } = Joi.object()
    .keys({
      name: Joi.string().alphanum().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().required(),
    })
    .validate(req.body);

  if (error) {
    const errorField = error.details[0].context.key;

    return res
      .status(400)
      .json({ message: `Missing required ${errorField} field!` });
  }

  next();
};

const validatedContactOnPut = (req, res, next) => {
  const { error } = Joi.object({
    name: Joi.string().alphanum(),
    email: Joi.string().email(),
    phone: Joi.string(),
  }).validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ message: "Error in the field content! Please fix it up!" });
  }

  next();
};

module.exports = { validatedContactOnPost, validatedContactOnPut };
