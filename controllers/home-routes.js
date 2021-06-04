const router = require("express").Router();
const { User, Truck } = require("../model");
// const withAuth = require('../utils/auth');
// "withAuth" goes between "/" and async

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      // order: [["name", "ASC"]],
    });

    const users = userData.map((User) => User.get({ plain: true }));

    console.log("req.session.loggedIn", req.session.loggedIn);

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

  console.log("*****trucks", allTrucks);

  res.render("truck", { allTrucks });
});

module.exports = router;
