const express = require("express");
const router = express.Router();
const { Status } = require("../model/status");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  const statuses = await Status.findAll({
    where: { userId: req.user.id }
  });
  res.send(statuses);
});
router.get("/MonthDetail", auth, async (req, res) => {
  const statuses = await Status.findAll({
    where: { userId: req.user.id },
    include: ["paiments", "purchases"]
  });
  const monthGain = statuses.map(status => {
    const details = {
      year: status.year,
      month: status.month,
      Gain: status.paiments
        .filter(paiment => paiment.paid)
        .map(paiment => paiment.amount)
        .reduce((total, num) => total + num, 0),
      Loss: status.purchases
        .filter(purchase => purchase.paid)
        .map(purchase => purchase.amount)
        .reduce((total, num) => total + num, 0)
    };

    return details;
  });

  res.send(monthGain);
});

module.exports = router;
