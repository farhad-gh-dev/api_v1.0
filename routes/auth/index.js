const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const route = express.Router();
const authValidation = require("../../models/validationModels/authValidation");
const User = require("../../models/user");

route.post("/register", async (req, res) => {
  //DATA VALIDATION
  const { error } = authValidation.register(req.body);
  if (error) return res.status(400).json({ message: error.message });

  //CHECK IF USER EXIST
  const userExist = await User.findOne({ email: req.body.email });
  if (userExist)
    return res
      .status(403)
      .json({ message: "a user with this email is already registered!" });

  //HASH USER PASSWORD
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  res.json({ ...req.body, password: hashedPassword });
});

module.exports = route;

// const newUser = new User({
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password,
//   });
//   const saveUser = await newUser.save();
