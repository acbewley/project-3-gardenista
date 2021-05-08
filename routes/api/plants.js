const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/plants"
router
  .route("/")
  .get(plantsController.findAll)
//   .post(plantsController.create);

// Matches with "/api/plants/:id"
router
  .route("/:id")
  .get(plantsController.findById)
  .put(plantsController.update)
  .delete(plantsController.remove);

module.exports = router;
