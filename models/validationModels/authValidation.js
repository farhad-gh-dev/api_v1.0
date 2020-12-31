const joi = require("joi");

const register = (data) => {
  const schema = joi.object({
    username: joi.string().min(6).max(65).required(),
    email: joi.string().min(6).max(65).email().required(),
    password: joi.string().min(8).required(),
  });

  return schema.validate(data);
};

module.exports = {
  register,
};
