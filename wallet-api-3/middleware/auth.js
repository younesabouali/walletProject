const jwt = require("jsonwebtoken");
module.exports = function(req, res, next) {
  const token = req.header("token");
  if (!token) return res.status(401).send("acces Denied.  No Token Provided");
  try {
    const payload = jwt.verify(token, "shhhhh");
    req.user = payload;
    next();
  } catch (error) {
    return res.status(400).send("Invalid Token");
  }
};
