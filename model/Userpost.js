const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Userpost extends Model {}

Userpost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    model_name: {
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "userpost",
  }
);

module.exports = Userpost;
