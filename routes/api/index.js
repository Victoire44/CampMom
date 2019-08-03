const router = require("express").Router();
const exampleRoutes = require("./favorites");

router.use("/favorites", exampleRoutes);

module.exports = router;
