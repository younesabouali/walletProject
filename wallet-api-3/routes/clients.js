const express = require("express");
const router = express.Router();
const { Client } = require("../model/client");
const { Paiment } = require("../model/paiment");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  const clients = await Client.findAll({
    where: { userId: req.user.id },
    include: ["paiments"]
  });

  const objectRes = clients.map(client => {
    const object = {
      id: client.id,
      Client: client.name,
      ClientPaiment: client.paiments
        .map(paiment => {
          const objectPaiment = { amount: paiment.amount, paid: paiment.paid };
          return objectPaiment;
        })
        .filter(paiment => paiment.paid)
        .map(paiment => paiment.amount)
        .reduce((total, num) => total + num, 0),
      ClientPending: client.paiments
        .map(paiment => {
          const objectPaiment = { amount: paiment.amount, paid: paiment.paid };
          return objectPaiment;
        })
        .filter(paiment => !paiment.paid)
        .map(paiment => paiment.amount)
        .reduce((total, num) => total + num, 0)
    };
    return object;
  });
  res.send(objectRes);
});
router.get("/clientMonth/:statusId", auth, async (req, res) => {
  const clients = await Client.findAll({
    where: { statusId: req.params.statusId },
    include: ["paiments"]
  });
  if (!clients) return res.status(404).send("clients not found");
  const objectRes = clients.map(client => {
    const object = {
      Name: client.name,
      ClientPaiment: client.paiments
        .filter(paiment => paiment.paid)
        .map(paiment => paiment.amount)
        .reduce((total, num) => total + num)
    };
    return object;
  });
  res.send(objectRes);
});
router.post("/", auth, async (req, res) => {
  const clientExist = await Client.findOne({
    where: { name: req.body.name, userId: req.user.id }
  });
  if (clientExist) return res.status(403).send("You already have this client");
  const client = await Client.build({
    name: req.body.name,
    userId: req.body.user
  });
  await client.save();
  res.status(200).send([client]);
});
router.put("/:id", auth, async (req, res) => {
  const client = await Client.findByPk(req.params.id);

  client.update({ name: req.body.name, userId: req.body.user });
  await client.save();

  res.status(200).send([client]);
});
router.delete("/:id", auth, async (req, res) => {
  const client = await Client.findByPk(req.params.id);
  await client.destroy();
  res.status(200).send([client]);
});
module.exports = router;
