const Providers = require('../controllers/Providers')

const router = require('express').Router()


router.get('/providers', Providers.getAll)

module.exports = router;