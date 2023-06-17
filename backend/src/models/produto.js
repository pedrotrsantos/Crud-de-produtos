const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const db = require("../config/database");

// module.exports = () => {
//   const Produto = db.define("produto", {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     nome: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     quantidade: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     valor: {
//       type: DataTypes.DECIMAL(10, 2),
//       allowNull: false,
//     },
//   });
//   return Produto;
// };

const Produto = db.define("produto", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});
module.exports = Produto;
