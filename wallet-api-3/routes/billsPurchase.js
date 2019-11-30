const express = require("express");
const router = express.Router();
const { Purchase } = require("../model/purchase");
const { Provider } = require("../model/provider");
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
// router.get("/warnings/:statusId", auth, async (req, res) => {
//   const purchases = Purchase.findAll({
//     where: { type: "bill", statusId: req.params.statusId, paid: false }
//   });
//   const warnings = purchases.map(purchase => {
//     if (purchase.year === new Date().getFullYear()) {
//       if (purchase.month === new Date().getMonth() + 1) {
//         if (2 < purchase.Day - new Date().getDate() < 5) {
//           const objectWarning = {
//             Detail: purchase.detail,
//             Amount: purchase.amount,
//             warning: "less than five days"
//           };
//           return objectWarning;
//         } else if (1 < purchase.Day - new Date().getDate() <= 2) {
//           const objectWarning = {
//             Detail: purchase.detail,
//             Amount: purchase.amount,
//             warning: "less than 2 days"
//           };
//           return objectWarning;
//         } else if (0 < purchase.Day - new Date().getDate() <= 1) {
//           const objectWarning = {
//             Detail: purchase.detail,
//             Amount: purchase.amount,
//             warning: "less than 1 day"
//           };
//           return objectWarning;
//         }
//       }
//     }
//   });
//   res.status(200).send([warnings]);
// });

module.exports = router;
