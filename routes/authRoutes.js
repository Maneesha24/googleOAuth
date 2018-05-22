const passport = require("passport");
const express = require("express");
const app = express();

module.exports = app => {
  app.get(
    "auth/google/callback",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/", (req, res) => {
    res.send({ hi: "there" });
  });
};
