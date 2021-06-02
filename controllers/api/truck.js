const router = require("express").Router();
const { Truck } = require("../../model");

router.get("/", async (req, res) => {
  try {
    const userData = await Truck.findAll();

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await Truck.findByPk(req.params.id);

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
