const joi = require("joi");

const email = (data) => {
  const schema = joi.object({
    name: joi.string().min(1).max(26).required(),
    email: joi.string().min(3).max(64).required(),
    location: joi.string().max(95),
    message: joi.string().min(1).max(850).required(),
  });

  return schema.validate(data);
};

module.exports = {
  email,
};
