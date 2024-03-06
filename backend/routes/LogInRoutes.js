/** @format */

const express = require("express");
const router = express.Router();

const { logInUser } = require("../controllers/LogInControllers");

router.post("/login", logInUser);

module.exports = router;
