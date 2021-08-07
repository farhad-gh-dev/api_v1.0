const MenuModel = require("../../models/yummyMenu/yummeMenuMenus");

const getMenu = async (req, res) => {
  //REQUEST BODY VALIDATION
  if (!req.params.restaurantName)
    return res.json({ message: "request is missing restaurant name." });

  //GET MENU IN DB
  try {
    const response = await MenuModel.findOne({
      restaurantName: req.params.restaurantName,
    });

    if (!response)
      return res
        .status(400)
        .json({ message: "Menu was not found for this restaurant" });

    res.json(response);
  } catch (error) {
    res.json({ message: "something went wrong" });
  }
};

module.exports = getMenu;
