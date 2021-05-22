const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/").get(userController.findAll).post(userController.create);

router.route("/auth").get(userController.authenticate);

router.route("/login").post(userController.login);

router.route("/:id").get(userController.findById).put(userController.update);

module.exports = router;
