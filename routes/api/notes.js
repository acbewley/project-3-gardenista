const router = require("express").Router();
const notesController = require("../../controllers/notesController");

router
.route("/")
.post(notesController.create)
.get(notesController.findAll);

router
  .route("/:id")
  .get(notesController.findById)
  .put(notesController.update)
  .delete(notesController.remove);

module.exports = router;
