import { mssqlOptions } from "./mssql";
import { mysqlOptions } from "./mysql";
import { postgresOptions } from "./postgres";
import { sqliteOptions } from "./sqlite";
import { DialectOptions } from "./dialect-options";
import { Dialect } from "sequelize";

export const dialects: any = {
  mssql: mssqlOptions,
  mysql: mysqlOptions,
  mariadb: mysqlOptions,
  postgres: postgresOptions,
  sqlite: sqliteOptions
};
