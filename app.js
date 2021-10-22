//require all packages
const express = require("express");
const connectDB = require("./db/connect");
require("dotenv").config();
const app = express();

const home = require("./routes/home");

//use this the body-parser feature from express
app.use(express.json());

//setting up the templates
app.set("view engine", "pug");
app.set("views", "views");
app.use(express.static("./public"));
// app.use(express.static(path.join(__dirname, "public")));

app.use("/", home);

// 404 handler
app.use((req, res, next) => {
  const error = new Error("Page not found!!!!");
  error.status = 404;
  return next(error);
});

// main error handler
app.use((error, req, res, next) => {
  return res.status(error.status || 500).render("error", { error });
});

//define port on which server will run
const port = process.env.PORT || 4000;

//define start async function to start server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

//start server using the start() function
start();
