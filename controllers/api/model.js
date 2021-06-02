const router = require("express").Router();
const { Suv, Truck, Hybrid, Sedan, userPost } = require("../../type");

// The `/api/suv` endpoint

router.get("/", async (req, res) => {
  try {
    const userData = await Suv.findAll();

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.get("/", async (req, res) => {
  try {
    const userData = await Truck.findAll();

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.get("/", async (req, res) => {
  try {
    const userData = await Hybrid.findAll();

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.get("/", async (req, res) => {
  try {
    const userData = await Sedan.findAll();

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await Suv.findByPk(req.params.id);

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
router.get("/:id", async (req, res) => {
  try {
    const userData = await Hybrid.findByPk(req.params.id);

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const userData = await Sedan.findByPk(req.params.id);

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const userData = await userPost.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.post("/", async (req, res) => {
  try {
    const userData = await userPost.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.post("/", async (req, res) => {
  try {
    const userData = await userPost.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.post("/", async (req, res) => {
  try {
    const userData = await userPost.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
