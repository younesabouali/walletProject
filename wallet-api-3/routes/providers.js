const express = require("express");
const router = express.Router();
const { Provider } = require("../model/provider");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  const providers = await Provider.findAll({
    where: { userId: req.user.id },
    include: ["purchases"]
  });

  const objectRes = providers.map(provider => {
    const object = {
      id: provider.id,
      Provider: provider.name,
      ProviderPurchase: provider.purchases
        .map(purchase => {
          const objectPurchase = {
            amount: purchase.amount,
            paid: purchase.paid
          };
          return objectPurchase;
        })
        .filter(purchase => purchase.paid)
        .map(purchase => purchase.amount)
        .reduce((total, num) => total + num, 0),
      ProviderPending: provider.purchases
        .map(purchase => {
          const objectPurchase = {
            amount: purchase.amount,
            paid: purchase.paid
          };
          return objectPurchase;
        })
        .filter(purchase => !purchase.paid)
        .map(purchase => purchase.amount)
        .reduce((total, num) => total + num, 0)
    };
    return object;
  });
  res.send(objectRes);
});
router.get("/providerMonth/:statusId", auth, async (req, res) => {
  const providers = await Provider.findAll({
    where: { statusId: req.params.statusId },
    include: ["purchases"]
  });
  if (!providers) return res.status(404).send("providers not found");
  const objectRes = providers.map(provider => {
    const object = {
      Name: provider.name,
      ProviderPurchase: provider.purchases
        .filter(purchase => purchase.paid)
        .map(purchase => purchase.amount)
        .reduce((total, num) => total + num)
    };
    return object;
  });
  res.send(objectRes);
});
router.post("/", auth, async (req, res) => {
  const providerExist = await Provider.findOne({
    where: { name: req.body.name, userId: req.user.id }
  });
  if (providerExist)
    return res.status(403).send("You already have this provider");
  const provider = Provider.build({
    name: req.body.name,
    userId: req.body.user
  });
  await provider.save();
  res.status(200).send([provider]);
});
router.put("/:id", auth, async (req, res) => {
  const provider = await Provider.findByPk(req.params.id);

  provider.update({ name: req.body.name, userId: req.body.user });
  await provider.save();

  res.status(200).send([provider]);
});
router.delete("/:id", auth, async (req, res) => {
  const provider = await Provider.findByPk(req.params.id);
  await provider.destroy();
  res.status(200).send([provider]);
});
module.exports = router;
