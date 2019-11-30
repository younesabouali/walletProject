const Sequelize = require("sequelize");
const sequelize = require("../starting/sequelizeModel");
const Model = Sequelize.Model;

class Status extends Model {}
Status.init(
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    month: {
      type: Sequelize.INTEGER,
      allowNull: false,
      min: 1,
      max: 12
    },

    year: {
      type: Sequelize.INTEGER,
      allowNull: false,
      min: new Date().getFullYear()
    }
  },
  { sequelize, modelName: "status" }
);
module.exports = { Status };
