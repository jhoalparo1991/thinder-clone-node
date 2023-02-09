const { Sequelize } = require("sequelize");
const debug = require("debug")("Libs -> [sequelize]");
const init = require("../config/init");
// require("../config/config");

const database = process.env.DB_DBNAME;
const password = process.env.DB_PASSWORD;
const hostname = process.env.DB_HOSTNAME;
const username = process.env.DB_USER;
const dialect = process.env.DB_DIALECT;

(async () => {
  try {
    const sequelize = new Sequelize(database, username, password, {
      host: hostname,
      dialect,
    });
    await sequelize.authenticate();
    init(sequelize);
    debug("Database connected successfully");
  } catch (error) {
    debug("Error -> ", error.message);
  }
})();
