const joi = require("joi");

const yummyMenuMenus = (data) => {
  const schema = joi.object({
    restaurant_name: joi.string().min(6).max(65).required(),
    restaurant_menu: {
      burger: joi.object({
        popular: joi.array().items(
          joi.object({
            title: joi.string().min(4).max(40).required(),
            description: joi.string().min(20).max(200).required(),
            image: joi.string().max(150).required(),
          })
        ),
        beaf: joi.array().items(
          joi.object({
            title: joi.string().min(4).max(40).required(),
            description: joi.string().min(20).max(200).required(),
            image: joi.string().max(150).required(),
          })
        ),
        chicken: joi.array().items(
          joi.object({
            title: joi.string().min(4).max(40).required(),
            description: joi.string().min(20).max(200).required(),
            image: joi.string().max(150).required(),
          })
        ),
      }),
      pizza: joi.object({
        popular: joi.array().items(
          joi.object({
            title: joi.string().min(4).max(40).required(),
            description: joi.string().min(20).max(200).required(),
            image: joi.string().max(150).required(),
          })
        ),
        other: joi.array().items(
          joi.object({
            title: joi.string().min(4).max(40).required(),
            description: joi.string().min(20).max(200).required(),
            image: joi.string().max(150).required(),
          })
        ),
      }),
      drink: joi.object({
        popular: joi.array().items(
          joi.object({
            title: joi.string().min(4).max(40).required(),
            description: joi.string().min(20).max(200).required(),
            image: joi.string().max(150).required(),
          })
        ),
        hot: joi.array().items(
          joi.object({
            title: joi.string().min(4).max(40).required(),
            description: joi.string().min(20).max(200).required(),
            image: joi.string().max(150).required(),
          })
        ),
        cold: joi.array().items(
          joi.object({
            title: joi.string().min(4).max(40).required(),
            description: joi.string().min(20).max(200).required(),
            image: joi.string().max(150).required(),
          })
        ),
      }),
    },
  });

  return schema.validate(data);
};

module.exports = {
  yummyMenuMenus,
};
