const joi = require("joi");

const yummyMenuMenus = (data) => {
  const schema = joi.object({
    restaurant_name: joi.string().min(6).max(65).required(),
    restaurant_menu: joi.array().items(
      joi.object({
        title: joi.string().min(4).max(40).required(),
        description: joi.string().min(20).max(200).required(),
        image: joi.string().max(150).required(),
        type: joi.string().min(4).max(40).required(),
        category: joi.string().min(4).max(40).required(),
      })
    ),
  });

  return schema.validate(data);
};

module.exports = {
  yummyMenuMenus,
};
