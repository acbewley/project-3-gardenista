const router = require("express").Router();
const plantsRoutes = require("./plants");

// Post routes
router.use("/plants", plantsRoutes);

module.exports = router;