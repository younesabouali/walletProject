const Sequelize = require("sequelize");
const sequelize = require("../starting/sequelizeModel");
const Model = Sequelize.Model;

const { Status } = require("./status");
const { Purchase } = require("./purchase");
const { Paiment } = require("./paiment");
const { Provider } = require("./provider");
const { Client } = require("./client");

class User extends Model {}
User.init(
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  { sequelize, modelName: "user" }
);
User.addHook("afterCreate", async (user, options) => {
  const status = await Status.create({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    time: new Date()
  });
  await user.addStatus(status);
});

User.hasMany(Status);
User.hasMany(Paiment);
User.hasMany(Client);
User.hasMany(Purchase);
User.hasMany(Provider);

Status.hasMany(Paiment);
Status.hasMany(Client);
Status.hasMany(Purchase);
Status.hasMany(Provider);

Client.hasMany(Paiment);
Provider.hasMany(Purchase);

Status.belongsTo(User);
Paiment.belongsTo(Status);
Client.belongsTo(User);
Purchase.belongsTo(Status);
Provider.belongsTo(User);

module.exports = { User };
