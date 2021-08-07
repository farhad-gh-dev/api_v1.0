const GodModel = require("../../models/olympus/god");

const getAllGods = async (req, res) => {
  try {
    const response = await GodModel.find({}, "name", { sort: { godIndex: 1 } });

    if (!response) return res.status(400).json({ message: "No god was found" });

    res.json(response);
  } catch (error) {
    res.json({ message: "something went wrong" });
  }
};

module.exports = getAllGods;
