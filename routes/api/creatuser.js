const router = require("express").Router();
const userControllers = require("../../controllers/userControllers");

// Matches with "/api/createusers"
router.route("/")
  .post(userControllers.create);


module.exports = router;
