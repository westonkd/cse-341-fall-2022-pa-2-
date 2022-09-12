const express = require("express");
const router = express.Router();
const { index, show } = require("../controllers/contacts.controller");

router.use("/:id", show);
router.use("/", index);

module.exports = router;
