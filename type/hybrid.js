const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Hybrid extends Model {}

Hybrid.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    hybrid_name: {
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
    modelName: "hybrid",
  }
);

module.exports = Hybrid;
