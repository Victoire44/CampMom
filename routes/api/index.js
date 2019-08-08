const router = require("express").Router();
const favoritesRoutes = require("./favorites");
const createuserRoutes = require("./creatuser")

router.use("/favorites", favoritesRoutes);

router.use("/createusers", createuserRoutes);

module.exports = router;
