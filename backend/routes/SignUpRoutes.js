/** @format */

const express = require("express");
const router = express.Router();

const {
  signUpUser,
  getSignUpUser,
  getAllSignUpUser,
  updateSignUpUser,
  deleteSignUpUser,
} = require("../controllers/SignUpControllers");

const auth = require("../middleware/AuthMiddleware");

router.get("/retrieveAll", auth, getAllSignUpUser);
router.get("/retrieve/:id", auth, getSignUpUser);
router.post("/create", auth, signUpUser);
router.patch("/update/:id", auth, updateSignUpUser);
router.delete("/delete/:id", auth, deleteSignUpUser);

module.exports = router;
