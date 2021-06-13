const express = require("express");
const controller = require("../controllers/pets");
const router = express.Router();

router.post("/pets", controller.create);


module.exports = router;
