const debug = require("debug")("index.js");
const app = require("./app");

// Running server
app.listen(app.get("PORT"), () => {
  debug(`Server running in http://localhost:${app.get("PORT")}`);
});
