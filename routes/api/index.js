const router = require("express").Router();
const favoritesRoutes = require("./favorites");

router.use("/favorites", favoritesRoutes);

module.exports = router;
