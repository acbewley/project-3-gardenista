const router = require("express").Router();
const plantsRoutes = require("./plants");
const userRoutes = require("./user");
const notesRoutes = require("./notes");

// Post routes
router.use("/plants", plantsRoutes);
router.use("/user", userRoutes);
router.use("/notes", notesRoutes);

module.exports = router;
