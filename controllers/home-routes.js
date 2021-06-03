const router = require("express").Router();
const { User } = require("../model");
// const withAuth = require('../utils/auth');
// "withAuth" goes between "/" and async

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      // order: [["name", "ASC"]],
    });

    const users = userData.map((User) => User.get({ plain: true }));

    res.render("layouts/main", {
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

router.get("/truck", (req, res) => {
  res.render("truck");
});

module.exports = router;
