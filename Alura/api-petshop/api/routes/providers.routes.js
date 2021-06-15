const Providers = require('../controllers/Providers')

const router = require('express').Router()


router.get('/providers', Providers.getAll)
router.post("/providers", Providers.register);
module.exports = router;