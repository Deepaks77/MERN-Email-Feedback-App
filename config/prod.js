// prod.js -- production keys here

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  MONGO_URI: process.env.MONGODB_CONNECTION_URL,
  cookieKey: process.env.COOKIE_KEY,
};
