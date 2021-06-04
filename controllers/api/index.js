const router = require("express").Router();
const userRoutes = require("./userRoutes");
const truckRoutes = require("./truck");
const suvRoutes = require("./suv");
const sedanRoutes = require("./sedan");
const hybridRoutes = require("./hybrid");
const Userpost = require("./Userpost");

router.use("/users", userRoutes);
router.use("/suv", suvRoutes);
router.use("/truck", truckRoutes);
router.use("/sedan", sedanRoutes);
router.use("/hybrid", hybridRoutes);
router.use("/Userpost", Userpost);

module.exports = router;
