const express = require("express");
const router = express.Router();
const atendimento = require("./atendimento.routes");
const pets = require("./pets.routes");

router.use("/", atendimento);
router.use("/", pets);

module.exports = router;
