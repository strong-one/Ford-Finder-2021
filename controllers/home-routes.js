const router = require("express").Router();
const { User, Truck, Hybrid, Sedan, Suv } = require("../model");
// const withAuth = require('../utils/auth');
// "withAuth" goes between "/" and async

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      // order: [["name", "ASC"]],
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
  // return;
});

router.get("/hybrid", async (req, res) => {
  //get truck data - form your truck table
  const rawHybridData = await Hybrid.findAll();
  const allHybrids = rawHybridData.map((hybrid) => hybrid.get({ plain: true }));

  res.render("hybrid", { allHybrids });
  // return;
});

router.get("/sedan", async (req, res) => {
  //get truck data - form your truck table
  const rawSedanData = await Sedan.findAll();
  const allSedans = rawSedanData.map((sedan) => sedan.get({ plain: true }));

  res.render("sedan", { allSedans });
  // return;
});

router.get("/suv", async (req, res) => {
  //get truck data - form your truck table
  const rawSuvData = await Suv.findAll();
  const allSuvs = rawSuvData.map((suv) => suv.get({ plain: true }));

  res.render("suv", { allSuvs });
  // return;
});

module.exports = router;
