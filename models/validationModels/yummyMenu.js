const joi = require("joi");

const yummyMenuMenus = (data) => {
  const schema = joi.object({
    restaurantName: joi.string().min(6).max(65).required(),
    restaurantMenu: joi.object(), required()
  });

  return schema.validate(data);
};

module.exports= {
    yummyMenuMenus
}