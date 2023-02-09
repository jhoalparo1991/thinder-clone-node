const { userSchema, User } = require("../components/users/model");

function init(sequelize) {
  User.init(userSchema, User.config(sequelize));
}

module.exports = init;
