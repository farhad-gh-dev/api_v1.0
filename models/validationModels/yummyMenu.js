const joi = require("joi");

const yummyMenuMenus = (data) => {
  const typesAndCategories = {
    burger: ["popular", "beaf", "chicken"],
    pizza: ["popular", "other"],
    drink: ["popular", "hot", "cold"],
  };
  const burgerCategories = ["popular", "beaf", "chicken"];
  const pizzaCategories = ["popular", "other"];
  const drinkCategories = ["popular", "hot", "cold"];

  const schema = joi.object({
    restaurant_name: joi.string().min(6).max(65).required(),
    restaurant_menu: {
      // ...Object.keys(typesAndCategories).map((typeTitle) => {
      //   return {
      //     [typeTitle]: joi.object(
      //       ...typesAndCategories[typeTitle].map((item) => {
      //         return {
      //           [item]: joi.array().items(
      //             joi.object({
      //               title: joi.string().min(4).max(40).required(),
      //               description: joi.string().min(20).max(200).required(),
      //               image: joi.string().max(150).required(),
      //             })
      //           ),
      //         };
      //       })
      //     ),
      //   };
      // }),
      burger: joi.object(
        ...burgerCategories.map((item) => {
          return {
            [item]: joi.array().items(
              joi.object({
                title: joi.string().min(4).max(40).required(),
                description: joi.string().min(20).max(200).required(),
                image: joi.string().max(150).required(),
              })
            ),
          };
        })
      ),
      pizza: joi.object(
        ...pizzaCategories.map((item) => {
          return {
            [item]: joi.array().items(
              joi.object({
                title: joi.string().min(4).max(40).required(),
                description: joi.string().min(20).max(200).required(),
                image: joi.string().max(150).required(),
              })
            ),
          };
        })
      ),
      drink: joi.object(
        ...drinkCategories.map((item) => {
          return {
            [item]: joi.array().items(
              joi.object({
                title: joi.string().min(4).max(40).required(),
                description: joi.string().min(20).max(200).required(),
                image: joi.string().max(150).required(),
              })
            ),
          };
        })
      ),
    },
  });

  return schema.validate(data);
};

module.exports = {
  yummyMenuMenus,
};
