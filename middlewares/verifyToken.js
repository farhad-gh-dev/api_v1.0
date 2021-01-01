const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userCredentials) => {
    if (err) return res.status(401).json({ message: "Authentication Failed." });

    res.user = userCredentials;
    next();
  });

  next();
};

module.exports = verifyToken;
