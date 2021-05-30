const joi = require("joi");

const quote = (data) => {
  const schema = joi.object({
    quote: joi.string().min(10).max(300).required(),
    quotee: joi.string().min(5).max(100).required(),
  });

  return schema.validate(data);
};

module.exports = {
  quote,
};
