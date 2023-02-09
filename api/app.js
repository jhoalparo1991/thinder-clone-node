require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const setupRoutes = require("./routes");
const { errorHandle, logErrors } = require("./middlewares/errors");

// Initialization
const app = express();
require("./libs/sequelize");

// Settings
app.set("PORT", process.env.PORT || 3000);
// Middlewares

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes

setupRoutes(app);

// Handle errors
app.use(errorHandle);
app.use(logErrors);

// Exports
module.exports = app;
