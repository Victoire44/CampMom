const router = require("express").Router();
const exampleRoutes = require("./example");

router.use("/example", exampleRoutes);

module.exports = router;
