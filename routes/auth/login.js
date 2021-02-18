const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authValidation = require("../../models/validationModels/authValidation");
const User = require("../../models/user");

const loginUser = async (req, res) => {
  //DATA VALIDATION
  const { error } = authValidation.login(req.body);
  if (error) return res.status(400).json({ message: error.message });

  //CHECK IF USER EXIST
  const user = await User.findOne(
    req.body.username.includes("@")
      ? { email: req.body.username }
      : { username: req.body.username }
  );

  if (!user) return res.status(401).json({ message: "Authentication Failed." });

  //CHECK IF PASSWORD IS CORRECT
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(401).json({ message: "Authentication Failed." });

  //GENERATE TOKEN
  const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "48h",
  });

  res.status(201).json({ message: "User logged in.", token });
};

module.exports = loginUser;
