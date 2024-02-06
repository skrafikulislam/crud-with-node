const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 8000;

//! MongoDb Connection Here ->
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Database Connected Successfully ");
  })
  .catch((err) => {
    console.log("Mongodb Database is not Connected , Find the Error", err);
  });

//* Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/authRoutes.js"));

app.listen(PORT, () => {
  console.log(`Server is Running on Posrt ${PORT}`);
});
