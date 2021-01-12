// prod.js -- production keys here

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  MONGO_URI: process.env.MONGODB_CONNECTION_URL,
  cookieKey: process.env.COOKIE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
  mailFrom: process.env.MAIL_FROM,
  redirectDomain: process.env.REDIRECT_DOMAIN,
};
