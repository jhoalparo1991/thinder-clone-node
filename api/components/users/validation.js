const Joi = require("joi");

const fullname = Joi.string()
  .min(3)
  .message("Ingrese mínimo 3 caracteres")
  .max(50)
  .message("Ingrese máximo 50 caracteres");

const nickname = Joi.string()
  .min(3)
  .message("Ingrese mínimo 3 caracteres")
  .max(50)
  .message("Ingrese máximo 50 caracteres");

const email = Joi.string().email({
  tlds: {
    allow: ["com", "net", "co"],
  },
});

const password = Joi.string().alphanum();

const age = Joi.number()
  .integer()
  .min(18)
  .message("La edad mínima es de 18 años");

const validateCreateUser = Joi.object({
  fullname: fullname.required(),
  nickname: nickname.required(),
  email: email.required(),
  password: password.required(),
  age: age.required(),
});

module.exports = {
  validateCreateUser,
};
