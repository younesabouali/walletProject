const express = require("express");
const router = express.Router();
const { Purchase } = require("../model/purchase");
const { Status } = require("../model/status");
const { Provider } = require("../model/provider");
const { User } = require("../model/user");
const auth = require("../middleware/auth");
router.get("/", auth, async (req, res) => {
  const purchases = await Purchase.findAll({
    where: { userId: req.user.id }
  });
  const providers = await Provider.findAll({ where: { userId: req.user.id } });
  const Objectres = purchases.map(purchase => {
    const object = {
      id: purchase.id,
      amount: purchase.amount,
      paid: purchase.paid,
      type: purchase.type,
      Date: purchase.Date,
      name: providers.filter(provider => provider.id === purchase.providerId)[0]
        .name
    };
    return object;
  });
  res.send(Objectres);
});
router.get("/:id", async (req, res) => {
  if (req.params.id === "undefined") return;
  const purchase = await Purchase.findByPk(req.params.id);
  if (!purchase) return res.status(404).send("Purchase Not Found");
  const provider = await Provider.findByPk(purchase.providerId);
  const Objectres = {
    id: purchase.id,
    amount: purchase.amount,
    paid: purchase.paid,
    type: purchase.type,
    Date: purchase.Date,
    name: provider.name
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

  const provider = await Provider.findOrCreate({
    where: {
      name: req.body.provider,
      userId: req.user.id,
      statusId: status[0].id
    }
  });

  const objectPurchase =
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
  const purchase = await Purchase.build(objectPurchase);
  await purchase.save();
  await user.addPurchase(purchase);
  await status[0].addPurchase(purchase);
  await status[0].addProvider(provider[0]);
  await provider[0].addPurchase(purchase);
  res.send([purchase, provider, status, user]);
});
router.delete("/:id", auth, async (req, res) => {
  const purchase = await Purchase.findByPk(req.params.id);
  await purchase.destroy();
  res.status(200).send([purchase]);
});
module.exports = router;
