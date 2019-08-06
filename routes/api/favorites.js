const router = require("express").Router();
const favoritesController = require("../../controllers/favoritesControllers");

// Matches with "/api/favorites"
router.route("")
  .get(favoritesController.findAll)
  .post(favoritesController.create);

// Matches with "/api/favorites/:id"
router.route("/:id")
  .delete(favoritesController.remove);

module.exports = router;
