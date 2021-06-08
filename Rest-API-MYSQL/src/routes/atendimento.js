const express = require("express");
const controller = require("../controllers/atendimentos");
const router = express.Router();

router.get("/atendimento", controller.show);
router.get("/atendimento/:id", controller.findById)
router.post("/atendimento", controller.create);
router.patch('/atendimentos/:id', controller.update)
router.patch("/atendimentos/:id", controller.delete);


module.exports = router;
