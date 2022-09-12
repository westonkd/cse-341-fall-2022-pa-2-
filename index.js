const express = require("express");
const app = express();

const routes = require("./routes");
const appConfig = require("./config/app");
const initializeDb = require("./initializers/db");

app.use(routes(express.Router()));

initializeDb().then(() => {
  app.listen(appConfig.port, () => {
    console.log(`Application listening on appConfig.port ${appConfig.port}`);
  });
});
