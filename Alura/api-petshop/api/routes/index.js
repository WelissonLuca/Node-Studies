const router = require("express").Router();

const providerRoutes = require('./providers.routes')

router.use("/", providerRoutes);

module.exports = router;