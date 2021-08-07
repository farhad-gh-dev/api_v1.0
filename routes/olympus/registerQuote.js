const QuoteModel = require("../../models/olympus/quote");
const olympusValidation = require("../../models/validationModels/olympus");

const registerQuote = async (req, res) => {
  //REQ BODY VALIDATION
  const { error } = olympusValidation.quote(req.body);

  if (error) return res.status(403).json({ message: error.message });

  //CREATE QUOTE OBJECT
  const newQuote = new QuoteModel({
    quote: req.body.quote,
    quotee: req.body.quotee,
  });

  //SAVE QUOTE IN DB
  try {
    const savedQuote = await newQuote.save();
    res.json({ result: savedQuote });
  } catch {
    return res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = registerQuote;
