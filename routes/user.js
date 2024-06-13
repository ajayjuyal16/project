const express = require("express");
const passport = require("passport");
const User = require("../models/user");
const catchAsync = require("../utils/catchAsync");
const router = express.Router();

// Render Signup Form
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Handle Signup Logic
router.post("/signup", catchAsync(async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, err => {
      if (err) return next(err);
      req.flash("success", "Welcome to StayHub!");
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
}));

// Render Login Form
router.get("/login", (req, res) => {
  res.render("login");
});

// Handle Login Logic
router.post("/login", passport.authenticate("local", {
  failureFlash: true,
  failureRedirect: "/login"
}), (req, res) => {
  req.flash("success", "Welcome back!");
  res.redirect("/listings");
});

// Logout
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success", "Goodbye!");
  res.redirect("/");
});

// Google OAuth Login
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    req.flash("success", "Welcome back!");
    res.redirect('/listings');
  }
);

module.exports = router;
