const GodModel = require("../../models/olympus/god");
const olympusValidation = require("../../models/validationModels/olympus");

const registerGod = async (req, res) => {
  //REQ BODY VALIDATION
  const { error } = olympusValidation.god(req.body);

  if (error) return res.status(403).json({ message: error.message });

  //CREATE GOD OBJECT
  const newGod = new GodModel({
    name: req.body.name,
    godIndex: req.body.godIndex,
    categories: req.body.categories,
  });

  //SAVE GOD INFO OBJECT IN DB
  try {
    const savedGod = await newGod.save();
    res.json({ result: savedGod });
  } catch {
    return res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = registerGod;
