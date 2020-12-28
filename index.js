const express = require("express");
const connectDB = require("./config/db.js");
const bodyParser = require("body-parser");
const keys = require("./config/keys.js");
const cookieSession = require("cookie-session");
const passport = require("passport");
connectDB();
require("./models/User.js");
require("./services/passport");

const app = express();
app.use(bodyParser.json());
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
require("./routes/billingRoutes")(app);
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
  //express will serve up production assets
  //like our main.js file, or min.css file!
  app.use(express.static("client/build"));

  //express will serve up the index.html file
  //if it does not recognise the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "clien", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("App is running on port", PORT);
});
