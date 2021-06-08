const express = require('express');
const controller = require('../controllers/atendimentos')
const router = express.Router();

router.get('/atendimento', controller.show)


module.exports = router;