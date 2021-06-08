const express = require("express");
const router = express.Router();
const atendimento = require("./atendimento");

router.use("/", atendimento);

module.exports = router;
