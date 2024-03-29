const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );
  app.get("/api/logout", (req, res) => {
    req.logout(); //passport automatically attach logout functionality to request object
    res.redirect("/");
  });
  app.get("/api/current_user", (req, res) => {
    res.send(req.user); //passport automatically attach user functionality to request object to give logged in user
  });
};
