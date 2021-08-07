const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  //CHECK FOR AUTH HEADERS
  if (!req.headers["authorization"])
    return res.status(401).json({ message: "Authentication Failed." });

  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];

  //VERIFY TOKEN AND ASSIGN USER CREDENTIALS TO A VARIABLE
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userCredentials) => {
    if (err) return res.status(401).json({ message: "Authentication Failed." });

    res.user = userCredentials;
    next();
  });
};

module.exports = verifyToken;
