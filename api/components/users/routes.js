const { Router } = require("express");
const debug = require("debug")("userModel -> ");
const { ValidationError } = require("joi");
const { success, error } = require("../../helpers/response");
const { validateCreateUser } = require("./validation");
const UserController = require("./controller");
const router = Router();

const userController = new UserController();

router.get("/", (req, res, next) => {
  res.send("Works!");
});

router.post("/", validateCreateUser, async (req, res, next) => {
  try {
    const data = req.body;
    const result = await userController.create(data);
    success(req, res, result, 201);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
