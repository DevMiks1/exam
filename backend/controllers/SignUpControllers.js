/** @format */

const signUpModel = require("../models/SIgnUpModels");
const bcrypt = require("bcrypt");

// SIGNUP THE USER
exports.signUpUser = async (req, res) => {
  const newSignUpUser = req.body;

  if (newSignUpUser.password !== newSignUpUser.confirmpassword) {
    return res.status(400).json({
      success: false,
      message: "password does not match",
    });
  }

  try {
    const existingUser = await signUpModel.findOne({
      $or: [
        {
          firstname: newSignUpUser.firstname.toLowerCase(),
          lastname: newSignUpUser.lastname.toLowerCase(),
        },
        { firstname: newSignUpUser.firstname.toLowerCase() },
        { lastname: newSignUpUser.lastname.toLowerCase() },
      ],
    });
    if (existingUser) {
      let message;
      if (
        existingUser.firstname.toLowerCase() ===
          newSignUpUser.firstname.toLowerCase() &&
        existingUser.lastname.toLowerCase() ===
          newSignUpUser.lastname.toLowerCase()
      ) {
        message = "firstname and lastname is already taken";
      } else if (
        existingUser.firstname.toLowerCase() ===
        newSignUpUser.firstname.toLowerCase()
      ) {
        message = "firstname is already taken";
      } else if (
        existingUser.lastname.toLowerCase() ===
        newSignUpUser.lastname.toLowerCase()
      ) {
        message = "lastname is already taken";
      }

      return res.status(409).json({
        success: false,
        message: message,
      });
    }

    const saltRounds = 10;
    // Hash the password
    const hashedPassword = await bcrypt.hash(
      newSignUpUser.password.toString(),
      saltRounds
    );

    newSignUpUser.password = hashedPassword;

    const signUpUser = await signUpModel.create(newSignUpUser);

    res.status(201).json({
      success: true,
      message: "Successfully signup the user",
      data: signUpUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// GET SINGLE SIGNUP USER
exports.getSignUpUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await signUpModel.findOne({ _id: id });

    if (user) {
      return res.status(200).json({
        success: true,
        message: "Successfuly Retrieved",
        data: user,
      });
    } else {
      return res.status(409).json({
        success: false,
        message: "User Not Found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL THE SIGNUP USER
exports.getAllSignUpUser = async (req, res) => {
  try {
    const user = await signUpModel.find();

    if (user.length > 0) {
      return res.status(200).json({
        success: true,
        message: "Successfully retrieved All User",
        data: user,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// UPDATE THE SIGNUP USER
exports.updateSignUpUser = async (req, res) => {
  const id = req.params.id;
  const set = req.body;

  if (set.password !== set.confirmpassword) {
    return res.status(400).json({
      success: false,
      message: "password does not match",
    });
  }

  try {
    const user = await signUpModel.findOneAndUpdate(
      { _id: id },
      { $set: set },
      { new: true }
    );

    if (user) {
      return res.status(200).json({
        success: true,
        message: "Sucessfully updated",
        data: user,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// DELETE THE SIGNUP USER
exports.deleteSignUpUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await signUpModel.findOneAndDelete({
      _id: id,
    });

    if (user) {
      return res.status(200).json({
        success: true,
        message: "Successfully Deleted",
      });
    } else {
      return res.status(409).json({
        success: false,
        message: "User Not Found",
      });
    }
  } catch (error) {
    return res.status.json({
      success: false,
      message: error.message,
    });
  }
};
