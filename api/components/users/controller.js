const { User } = require("./model");

class UserController {
  async create(data) {
    const result = await User.create(data);
    return result;
  }
}

module.exports = UserController;
