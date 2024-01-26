"use strict";

import sequelizeClient from '../sequelizeclient'
import { UserInterface } from "../../functions/Users/interface/UserInterface";

import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

class User
  extends Model<InferAttributes<User>, InferCreationAttributes<User>>
  implements UserInterface
{
  declare id: number;
  declare address: string;
  declare first_name: string;
  declare email: string;
  declare last_name: string;
  declare age: number;
}
User.init(
  {
    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
    },
    age: {
      type: DataTypes.NUMBER,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeClient(),
    modelName: "User",
  }
);

export default User;
