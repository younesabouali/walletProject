const express = require("express");
const app = express();

const status = require("./routes/statuses");
const auth = require("./routes/auth");
const clients = require("./routes/clients");
const paiments = require("./routes/paiments");
const purchases = require("./routes/purchases");
const providers = require("./routes/providers");
const users = require("./routes/users");
const billsPaiment = require("./routes/billsPaiment");
const billsPurchase = require("./routes/billsPurchase");

app.use(express.json());
app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/paiments", paiments);
app.use("/api/purchases", purchases);
app.use("/api/clients", clients);
app.use("/api/providers", providers);
app.use("/api/status", status);
app.use("/api/billsPaiment", billsPaiment);
app.use("/api/billsPurchase", billsPurchase);

app.listen(3020, () => {
  console.log("Listening on Port 3020");
});
