const router = require("express").Router();
const { Hybrid } = require("../../model");

router.get("/", async (req, res) => {
  try {
    const userData = await Hybrid.findAll();

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await Hybrid.findByPk(req.params.id);

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
