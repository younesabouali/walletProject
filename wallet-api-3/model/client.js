const Sequelize = require("sequelize");
const sequelize = require("../starting/sequelizeModel");
const Model = Sequelize.Model;

class Client extends Model {}
Client.init(
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
    }
  },
  { sequelize, modelName: "client" }
);
module.exports = { Client };
