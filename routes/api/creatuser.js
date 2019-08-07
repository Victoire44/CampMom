const router = require("express").Router();
const userControllers = require("../../controllers/userControllers");

// Matches with "/api/books"
router.route("/api/createusers")
  .post(userControllers.create);


module.exports = router;
