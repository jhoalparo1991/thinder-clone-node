require("dotenv").config();

const database = process.env.DB_DBNAME;
const password = process.env.DB_PASSWORD;
const hostname = process.env.DB_HOSTNAME;
const username = process.env.DB_USER;
const dialect = process.env.DB_DIALECT;
const port = process.env.DB_PORT;

const URL = `${dialect}://${username}:${password}@${hostname}:${port}/${database}`;

module.exports = {
  development: {
    url: URL,
    dialect: dialect,
  },
  production: {
    url: URL,
    dialect: dialect,
  },
};
