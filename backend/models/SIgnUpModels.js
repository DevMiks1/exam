/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SignUpSchema = new Schema(
  {
    firstname: {
      type: String,
      set: value => value.toLowerCase(),
      required: true,
    },
    lastname: {
      type: String,
      set: value => value.toLowerCase(),
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmpassword: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("signup", SignUpSchema);
