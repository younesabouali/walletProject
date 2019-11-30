const express = require("express");
const router = express.Router();
const { Paiment } = require("../model/paiment");
const { Client } = require("../model/client");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  const paiments = await Paiment.findAll({
    where: { userId: req.user.id }
  });
  const clients = await Client.findAll({ where: { userId: req.user.id } });
  const Objectres = paiments
    .filter(paiment => paiment.type === "bill")
    .map(paiment => {
      const object = {
        amount: paiment.amount,
        paid: paiment.paid,
        type: paiment.type,
        Date: paiment.Date,

        name: clients.filter(client => client.id === paiment.clientId)[0].name
      };
      return object;
    });
  res.send(Objectres);
});
router.get("/byMonth/:statusId", auth, async (req, res) => {
  const paiments = await Paiment.findAll({
    where: { type: "bill", statusId: req.params.statusId }
  });
  res.send(paiments);
});
router.get("/warnings/:userId", auth, async (req, res) => {
  const paiments = Paiment.findAll({
    where: { type: "bill", statusId: req.params.statusId, paid: false }
  });
  const warnings = paiments.map(paiment => {
    if (paiment.year === new Date().getFullYear()) {
      if (paiment.month === new Date().getMonth() + 1) {
        if (2 < paiment.Day - new Date().getDate() < 5) {
          const objectWarning = {
            Detail: paiment.detail,
            Amount: paiment.amount,
            warning: "less than five days"
          };
          return objectWarning;
        } else if (1 < paiment.Day - new Date().getDate() <= 2) {
          const objectWarning = {
            Detail: paiment.detail,
            Amount: paiment.amount,
            warning: "less than 2 days"
          };
          return objectWarning;
        } else if (0 < paiment.Day - new Date().getDate() <= 1) {
          const objectWarning = {
            Detail: paiment.detail,
            Amount: paiment.amount,
            warning: "less than 1 day"
          };
          return objectWarning;
        }
      }
    }
  });
  res.status(200).send([warnings]);
});

module.exports = router;
