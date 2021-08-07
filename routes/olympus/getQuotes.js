const QuoteModel = require("../../models/olympus/quote");

const getQuotes = async (req, res) => {
  try {
    const response = await QuoteModel.find();

    if (!response)
      return res.status(400).json({ message: "No quote was found" });

    res.json(response);
  } catch (error) {
    res.json({ message: "something went wrong" });
  }
};

module.exports = getQuotes;
