const passport = require("passport");
const mongoose = require("mongoose");
const user = mongoose.model("users");
var googleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  user.findbyID(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      user.findOne({ googleID: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new user({ googleID: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
