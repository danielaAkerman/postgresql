import { Model, DataTypes } from "sequelize";
import { sequelize } from ".";

export class User extends Model {}
User.init(
  {
    username: { type: DataTypes.STRING, allowNull: false },
    lastname: { type: DataTypes.STRING },
    birthday: { type: DataTypes.DATEONLY },
    otrocampo: { type: DataTypes.STRING },
  },
  { sequelize, modelName: "User" }
);
