const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Sedan extends Model {}

Sedan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    sedan_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    engine_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transmission: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "sedan",
  }
);

module.exports = Sedan;
