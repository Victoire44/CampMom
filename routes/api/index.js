const router = require("express").Router();
const exampleRoutes = require("./example");

router.use("/example", exampleRoutes);
router.use("/creatuser")

module.exports = router;
