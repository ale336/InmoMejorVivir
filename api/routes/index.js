const express = require ("express");
const router = express.Router();
const users = require("./users");
const units = require("./units");
const categorias = require("./categorias");

router.use("/users", users);
router.use("/units" , units);
router.use("/categorias" ,categorias);

module.exports = router;