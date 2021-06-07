const joi = require("joi");

const quote = (data) => {
  const schema = joi.object({
    quote: joi.string().min(10).max(300).required(),
    quotee: joi.string().min(5).max(100).required(),
  });

  return schema.validate(data);
};

const god = (data) => {
  const schema = joi.object({
    name: joi.string().min(3).max(50).required(),
    index: joi.number().required(),
    categories: joi.array().items(
      joi.object({
        title: joi.string().min(3).max(50).required(),
        description: joi.string().min(100).required(),
      })
    ),
  });

  return schema.validate(data);
};

module.exports = {
  quote,
  god,
};
