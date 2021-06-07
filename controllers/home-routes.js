const router = require("express").Router();
const { User, Truck, Hybrid, Sedan, Suv, Userpost } = require("../model");
// const withAuth = require('../utils/auth');
// "withAuth" goes between "/" and async

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
    });

    const users = userData.map((User) => User.get({ plain: true }));

    res.render("homepage", {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/login");
    return;
  }

  res.render("login");
});

router.get("/truck", async (req, res) => {
  //get truck data - form your truck table
  const rawTruckData = await Truck.findAll();
  const allTrucks = rawTruckData.map((truck) => truck.get({ plain: true }));

  res.render("truck", { allTrucks });
});

router.get("/hybrid", async (req, res) => {
  const rawHybridData = await Hybrid.findAll();
  const allHybrids = rawHybridData.map((hybrid) => hybrid.get({ plain: true }));

  res.render("hybrid", { allHybrids });
});

router.get("/sedan", async (req, res) => {
  const rawSedanData = await Sedan.findAll();
  const allSedans = rawSedanData.map((sedan) => sedan.get({ plain: true }));

  res.render("sedan", { allSedans });
});

router.get("/suv", async (req, res) => {
  const rawSuvData = await Suv.findAll();
  const allSuvs = rawSuvData.map((suv) => suv.get({ plain: true }));

  res.render("suv", { allSuvs });
});

// get route for userpost/trade in

router.get("/post", async (req, res) => {
  const rawUserTrade = await Userpost.findAll();
  const allTrades = rawUserTrade.map((trade) => trade.get({ plain: true }));

  res.render("post", { allTrades });
});

// POST VEHICLE

// router.post("/post", async (req, res) => {
//   try {
//     const vehicleTrade = await Userpost.create(req.body);
//     res.status(200).json(vehicleTrade);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// get truck by single id
// router.get("/truck/:id", async (req, res) => {
//   try {
//     const singleTruckRaw = await Truck.findByPk(req.params.id);

//     const oneTruck = singleTruckRaw.get({ plain: true });
//     res.render("truck", { oneTruck });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
