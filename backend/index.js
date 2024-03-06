/** @format */

const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config()

const app = express();
const port = 8000 | 6001;

// DATABASE CONNECTION
const database = require("./config/database")
database()

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES

// SIGNUP ROUTES
const signUpRoutes = require("./routes/SignUpRoutes")
app.use("/api/registration", signUpRoutes)

// LOGIN ROUTES
const logInRoutes = require("./routes/LogInRoutes")
app.use("/api", logInRoutes)

app.listen(port, () => {
  console.log(`You are connected to ${port} port `);
});
