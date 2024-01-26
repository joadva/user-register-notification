import { Sequelize } from "sequelize";
import configVariables from "./config/configVariables";

const {
  databaseDialect,
  databaseHost,
  databaseName,
  databasePassword,
  databasePort,
  databaseUser,
} = configVariables();

let sequelizeConnection: null | Sequelize = null;

const sequelizeClient = () => {
  if (null === sequelizeConnection) {
    sequelizeConnection = new Sequelize(
      `${databaseDialect}://${databaseUser}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}`
    );
  }
  return sequelizeConnection;
};


export default sequelizeClient;