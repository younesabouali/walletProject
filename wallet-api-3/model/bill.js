// const Sequelize = require("sequelize");
// const sequelize = require("../starting/sequelizeModel");
// const Model = Sequelize.Model;

// class Bill extends Model {}
// Bill.init(
//   {
//     id: {
//       type: Sequelize.UUID,
//       allowNull: false,
//       defaultValue: Sequelize.UUIDV4,
//       primaryKey: true
//     },
//     amount: {
//       type: Sequelize.FLOAT(2),
//       allowNull: false,
//       min: 0
//     },
//     Day: {
//       type: Sequelize.INTEGER,
//       allowNull: false,
//       min: 1,
//       max: 31
//     },
//     month: {
//       type: Sequelize.INTEGER,
//       allowNull: false,
//       min: 1,
//       max: 12
//     },
//     year: {
//       type: Sequelize.INTEGER,
//       allowNull: false,
//       min: new Date().getFullYear()
//     }
//   },
//   { sequelize, modelName: "bill" }
// );
// module.exports = { Bill };
