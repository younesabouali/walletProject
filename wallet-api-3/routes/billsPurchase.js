const express = require("express");
const router = express.Router();
const { Purchase } = require("../model/purchase");
const { Provider } = require("../model/provider");
const datefns = require("date-fns");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  const purchases = await Purchase.findAll({
    where: { userId: req.user.id }
  });
  const providers = await Provider.findAll({ where: { userId: req.user.id } });
  const Objectres = purchases
    .filter(purchase => purchase.type === "bill")
    .map(purchase => {
      const object = {
        id: purchase.id,
        amount: purchase.amount,
        paid: purchase.paid,
        type: purchase.type,
        Date: purchase.Date,

        name: providers.filter(
          provider => provider.id === purchase.providerId
        )[0].name
      };
      return object;
    });
  res.send(Objectres);
});
router.get("/byMonth/:statusId", auth, async (req, res) => {
  const purchases = await Purchase.findAll({
    where: { type: "bill", statusId: req.params.statusId }
  });
  res.send(purchases);
});
router.get("/warnings", auth, async (req, res) => {
  const purchases = await Purchase.findAll({
    where: { type: "bill", userId: req.user.id, paid: false }
  });
  const warnings = purchases.map(purchase => {
    const object = {
      daysLeft: datefns.differenceInDays(purchase.Date, new Date()),
      purchaseId: purchase.id
    };
    return object;
  });
  res.status(200).send(warnings);
});

module.exports = router;
