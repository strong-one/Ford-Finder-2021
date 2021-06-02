const router = require("express").Router();
const { Userpost } = require("../../model");

router.get("/", async (req, res) => {
  try {
    const userData = await Userpost.findAll();

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.post("/", async (req, res) => {
//   try {
//     const userData = await Userpost.create(req.body);
//     res.status(200).json(userData);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json(err);
//   }
// });
router.post("/", async (req, res) => {
  try {
    const userData = await Userpost.create({
      model_name: req.body.model_name,
      engine_type: req.body.engine_type,
      transmission: req.body.transmission,
      color: req.body.color,
    });
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;