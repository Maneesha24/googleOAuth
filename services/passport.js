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
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await user.findOne({ googleID: profile.id });
      if (existingUser) {
        done(null, existingUser);
      }
      const user = await new user({ googleID: profile.id }).save();
      done(null, user);
    }
  )
);
