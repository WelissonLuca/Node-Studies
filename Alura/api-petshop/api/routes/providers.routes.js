const Providers = require("../controllers/Providers");

const router = require("express").Router();

router.post("/providers", Providers.register);
router.get("/providers", Providers.getAll);
router.get("/provider/:id", Providers.getById);
router.put("/provider/:id", Providers.update);

module.exports = router;
