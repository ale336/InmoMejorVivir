const express = require ("express");
const router = express.Router();
const users = require("./users");
const units = require("./units");

router.use("/users", users);
router.use("/units" , units);


module.exports = router;