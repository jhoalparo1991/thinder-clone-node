const express = require("express");
const userRoutes = require("./components/users/routes");

function setupRoutes(app) {
  const server = express();
  app.use("/api/v1", server);

  server.use("/users", userRoutes);
}

module.exports = setupRoutes;
