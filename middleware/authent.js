const jwt = require("jsonwebtoken");
require("dotenv").config();

async function authentication(req, res, next) {
  let token = req.headers.authorization?.split(" ")[1] 
  if (!token) {
    res.status(401).send({ "msg": "token not found" });
    return;
  }
  try {
    let decoded = jwt.verify(token, process.env.mykey);
    req.user = decoded.id;
    next();
  } catch (err) {
    res.status(401).send({ msg: "invalid token", status: "error" });
  }
}

module.exports = authentication 