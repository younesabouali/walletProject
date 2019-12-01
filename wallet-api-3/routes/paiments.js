const express = require("express");
const router = express.Router();
const { Paiment } = require("../model/paiment");
const { Status } = require("../model/status");
const { Client } = require("../model/client");
const { User } = require("../model/user");
const auth = require("../middleware/auth");
router.get("/", auth, async (req, res) => {
  const paiments = await Paiment.findAll({
    where: { userId: req.user.id }
  });
  const clients = await Client.findAll({ where: { userId: req.user.id } });
  const Objectres = paiments.map(paiment => {
    const object = {
      id: paiment.id,
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
router.get("/:id", auth, async (req, res) => {
  if (req.params.id === "undefined") return;
  const paiment = await Paiment.findByPk(req.params.id);
  if (!paiment) return res.status(404).send("Paiment Not Found");
  const client = await Client.findByPk(paiment.clientId);
  const Objectres = {
    id: paiment.id,
    amount: paiment.amount,
    paid: paiment.paid,
    type: paiment.type,
    Date: paiment.Date,
    name: client.name
  };

  res.send(Objectres);
});
router.post("/", auth, async (req, res) => {
  const user = await User.findByPk(req.user.id);

  const status = await Status.findOrCreate({
    where: {
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      userId: req.user.id
    }
  });

  const client = await Client.findOrCreate({
    where: {
      name: req.body.client,
      userId: req.user.id,
      statusId: status[0].id
    }
  });

  const objectPaiment =
    req.body.type !== "bill"
      ? {
          amount: req.body.amount,
          detail: req.body.detail,
          type: req.body.type,
          Date: new Date(),
          paid: true
        }
      : {
          amount: req.body.amount,
          detail: req.body.detail,
          type: req.body.type,
          Date: req.body.Date,
          paid: false
        };
  const paiment = await Paiment.build(objectPaiment);
  await paiment.save();
  await user.addPaiment(paiment);
  await status[0].addPaiment(paiment);
  await status[0].addClient(client[0]);
  await client[0].addPaiment(paiment);
  res.send([paiment, client, status, user]);
});
router.delete("/:id", auth, async (req, res) => {
  const paiment = await Paiment.findByPk(req.params.id);
  await paiment.destroy();
  res.status(200).send([paiment]);
});
module.exports = router;
