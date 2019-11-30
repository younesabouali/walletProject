const express = require("express");
const router = express.Router();
const { User } = require("../model/user");
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");

// router.get("/", async (req, res) => {
//   const user = await User.findAll();

// });
router.post("/", async (req, res) => {
  const { email, name, password } = req.body;
  const user = User.build({ email, name, password });
  await user.save();
  const token = jwt.sign({ id: user.id, userName: user.name }, "shhhhh");
  res.send(token);
});
router.put("/", auth, async (req, res) => {
  const { email, name, password } = req.body;
  const user = await User.findByPk(req.user.id);
  await user.update({ email, name, password });
  res.send(user);
});
router.delete("/", auth, async (req, res) => {
  const user = await User.findByPk(req.user.id);
  await user.destroy();
  res.send(user);
});
module.exports = router;
