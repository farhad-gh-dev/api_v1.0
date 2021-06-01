const GodModel = require("../../models/olympus/god");

const getAllGods = async (req, res) => {
  try {
    const response = await GodModel.find({}, "name");

    if (!response)
      return res
        .status(400)
        .json({ message: "Menu was not found for this restaurant" });

    res.json(response);
  } catch (error) {
    res.json({ message: "something went wrong" });
  }
};

module.exports = getAllGods;
