const { DataTypes, Model } = require("sequelize");

const USER_TABLE = "User";

const userSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  fullname: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  nickname: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(120),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userType: {
    type: DataTypes.ENUM("user", "admin"),
    allowNull: false,
    defaultValue: "user",
    field: "user_type",
  },
  enable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  token: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW(),
    field: "created_at",
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW(),
    field: "updated_at",
  },
};

class User extends Model {
  static config(sequelize) {
    return {
      sequelize,
      modelName: "User",
      tableName: USER_TABLE,
      timestamps: true,
      updatedAt: true,
      createdAt: true,
    };
  }
}

module.exports = {
  USER_TABLE,
  userSchema,
  User,
};
