const Sequelize = require("sequelize");
const sequelize = require("../starting/sequelizeModel");

const Model = Sequelize.Model;

class Purchase extends Model {}
Purchase.init(
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },

    amount: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    detail: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    type: {
      type: Sequelize.ENUM("bill", "cheque", "cash"),
      allowNull: false
    },

    Date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    paid: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  },
  { sequelize, modelName: "purchase" }
);
module.exports = { Purchase };
