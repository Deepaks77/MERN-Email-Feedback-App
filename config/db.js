const mongoose = require("mongoose");
const keys = require("./keys.js");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(keys.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log("Mongodb Connected :", conn.connection.host);
  } catch (e) {
    console.log("Error is", e.message);
    process.exit(1);
  }
};

module.exports = connectDB;
