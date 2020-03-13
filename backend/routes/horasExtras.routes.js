const router = require("express").Router();
const { HorasExtrasController } = require("../contollers");

router.get("/", HorasExtrasController.index);
router.post("/", HorasExtrasController.create);
router.get("/users", HorasExtrasController.getUsers);

module.exports = router;