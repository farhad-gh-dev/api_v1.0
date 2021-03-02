const User = require("../../models/user");
const yummyMenuValidation = require("../../models/validationModels/yummyMenu");

const updateUser = async (req, res) => {
  //data validation *** empty body
  const { error } = yummyMenuValidation.userInfo(req.body);

  if (error) return res.status(403).json({ message: error.message });

  try {
    const user = await User.find({ _id: res.user.id });

    if (user) return res.json(user);

    //update info and send updated values
    // res.send({ result: "test" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = updateUser;
