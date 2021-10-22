const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connection Successful"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
