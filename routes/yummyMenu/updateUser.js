const User = require("../../models/user");
const yummyMenuValidation = require("../../models/validationModels/yummyMenu");

const updateUser = async (req, res) => {
  //CHECK IF BODY IS EMPTY
  if (req.body.constructor === Object && Object.keys(req.body).length === 0)
    return res.status(400).json({ message: "Empty request body" });

  //data validation *** empty body
  const { error } = yummyMenuValidation.userInfo(req.body);

  if (error) return res.status(403).json({ message: error.message });

  try {
    const user = await User.findOneAndUpdate(
      { _id: res.user.id },
      { username: req.body.username }
    );

    if (!user)
      return res.status(401).json({ message: "Authentication Failed." });

    res.json(user);

    //update info and send updated values
    // res.send({ result: "test" });
  } catch (err) {}
};

module.exports = updateUser;
