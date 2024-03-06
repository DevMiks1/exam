/** @format */

const signUpModel = require("../models/SIgnUpModels");

// LOGIN THE USER
exports.logInUser = async (req, res) => {
  const { firstname, lastname, password } = req.body;

  try {
    const user = await signUpModel.findOne({
      $or: [
        { firstname: firstname, lastname: lastname, password: password },
        { firstname: firstname },
        { lastname: lastname },
        { password: password },
      ],
    });

    if (user.firstname !== firstname || user.lastname !== lastname) {
      return res.status(401).json({
        success: false,
        message: "firstname or lastname is incorrect",
      });
    } else if (user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "password is incorrect",
      });
    }

    return res.status(200).json({
      success: true,
      message: "login successfully ",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
