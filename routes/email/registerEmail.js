const EmailModel = require("../../models/email");
const emailValidation = require("../../models/validationModels/emailValidation");

const registerEmail = async (req, res) => {
  //REQ BODY VALIDATION
  const { error } = emailValidation.email(req.body);

  if (error) return res.status(403).json({ message: error.message });

  //CREATE EMAIL OBJECT
  const newEmail = new EmailModel({
    name: req.body.name,
    email: req.body.email,
    location: req.body.location ? req.body.location : "",
    message: req.body.message,
  });

  //SAVE EMAIL OBJECT IN DB
  try {
    const savedEmail = await newEmail.save();
    res.json({ message: "email registration successful" });
  } catch {
    return res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = registerEmail;
