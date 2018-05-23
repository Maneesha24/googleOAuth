const express = require("express");
const passport = require("passport");

const mongoose = require("mongoose");
require("./models/user");
const keys = require("./config/keys");
const app = express();
const cookieSession = require("cookie-session");
require("./routes/authRoutes")(app);
require("./services/passport");

mongoose.connect(keys.mongoURI);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
mongoose.Promise = global.Promise;


const PORT = process.env.PORT || 5000;
app.listen(PORT);
