const GodModel = require("../../models/olympus/god");

const getEachGod = async (req, res) => {
  try {
    const response = await GodModel.find({ name: req.params.name });

    if (!response)
      return res
        .status(400)
        .json({ message: "No information was found for this god" });

    res.json(response);
  } catch (error) {
    res.json({ message: "something went wrong" });
  }
};

module.exports = getEachGod;
