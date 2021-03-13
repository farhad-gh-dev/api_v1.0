const yummyMenuValidation = require("../../models/validationModels/yummyMenu");

const registerOrder = (req, res) => {
  //Data Validation
  const { error } = yummyMenuValidation.yummyMenuOrder(req.body);

  if (error) return res.status(400).json({ message: error.message });

  //CHECK FOR USER * OR ONLY USE TOKEN
  //ADD ORDER OBJ TO CLUSTER
  //SEND RESPONSE

  res.json({
    id: res.user.id,
    message: "order registration route",
  });
};

module.exports = registerOrder;
