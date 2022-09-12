const routes = (router) => {
  router.use("/contacts", require("./contacts.routes"));

  return router;
};

module.exports = routes;
