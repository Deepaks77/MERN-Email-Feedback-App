const express = require("express");
const connectDB = require("./config/db.js");
const keys = require("./config/keys.js");
const cookieSession = require("cookie-session");
const passport = require("passport");
connectDB();
require("./models/User.js");
require("./services/passport");

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
//auth Routes
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("App is running on port", PORT);
});
