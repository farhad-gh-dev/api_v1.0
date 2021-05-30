const QuoteModel = require("../../models/olympus/quote");

const getMenu = async (req, res) => {
  try {
    const response = await QuoteModel.find();

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
