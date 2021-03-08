const joi = require("joi");

const register = (data) => {
  const schema = joi.object({
    username: joi.string().min(6).max(65).required(),
    email: joi.string().min(3).max(254).email().required(),
    password: joi.string().min(8).max(500).required(),
  });

  return schema.validate(data);
};

const login = (data) => {
  const schema = joi.object({
    usernameOrEmail: joi.string().min(3).max(254).required(),
    password: joi.string().min(8).max(500).required(),
  });

  return schema.validate(data);
};

const passwordReset = (data) => {
  const schema = joi.object({
    password: joi.string().min(8).max(500).required(),
    newPassword: joi
      .string()
      .min(3)
      .max(254)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/)
      .required(),
  });

  return schema.validate(data);
};

module.exports = {
  register,
  login,
  passwordReset,
};
