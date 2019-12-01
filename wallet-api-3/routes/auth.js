const express = require("express");
const router = express.Router();
const { User } = require("../model/user");
const { Status } = require("../model/status");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  //   const validate = validateAuth(req.body);
  //   if (validate.error !== null)
  //     return res.status(403).send(validate.error.details[0].message);
  const { email, password } = req.body;
  const user = await User.findOne({
    where: { email, password }
  });
  if (!user) return res.status(404).send("error:username or password Invalid");
  await Status.findOrCreate({
    where: {
      userId: user.id,
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear()
    }
  });
  const token = jwt.sign({ id: user.id, userName: user.name }, "shhhhh");
  res.send(token);
});

module.exports = router;
