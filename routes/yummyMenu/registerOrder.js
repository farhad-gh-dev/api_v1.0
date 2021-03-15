const orderModel = require("../../models/yummyMenu/yummyMenuOrder");
const yummyMenuValidation = require("../../models/validationModels/yummyMenu");

const registerOrder = async (req, res) => {
  //Data Validation
  const { error } = yummyMenuValidation.yummyMenuOrder(req.body);
  if (error) return res.status(400).json({ message: error.message });

  //ADD ORDER OBJ TO CLUSTER
  const newOrder = new orderModel({
    userId: res.user.id,
    restaurantId: req.body.restaurantId,
    order: req.body.order,
  });

  try {
    const registeredOrder = await newOrder.save();
    if (!registeredOrder)
      return res.status(500).json({ message: "Something went wrong" });

    //SEND RESPONSE
    res.json({
      message: "order registration successful",
      result: registeredOrder,
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports = registerOrder;
