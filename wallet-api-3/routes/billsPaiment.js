const express = require("express");
const router = express.Router();
const { Paiment } = require("../model/paiment");
const { Client } = require("../model/client");
const datefns = require("date-fns");
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

router.get("/warnings", auth, async (req, res) => {
  const paiments = await Paiment.findAll({
    where: { type: "bill", userId: req.user.id, paid: false }
  });
  const warnings = paiments.map(purchase => {
    return datefns.differenceInDays(purchase.Date, new Date());
  });
  res.status(200).send(warnings);
});
module.exports = router;
