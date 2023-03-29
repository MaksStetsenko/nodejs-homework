const jwt = require("jsonwebtoken");

const singToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const decodeToken = (token) => jwt.decode(token, process.env.JWT_SECRET);

module.exports = { singToken, decodeToken };
