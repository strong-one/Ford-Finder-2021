const router = require("express").Router();
const userRoutes = require("./userRoutes");
const modelRoutes = require("./model");

router.use("/users", userRoutes);
router.use("/model", modelRoutes);

module.exports = router;
