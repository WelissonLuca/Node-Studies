const express = require("express");
const controller = require("../controllers/atendimentos");
const router = express.Router();

router.get("/atendimento", controller.show);
router.get("/atendimento/:id", controller.findById)
router.post("/atendimento", controller.create);

module.exports = router;
