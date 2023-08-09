const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createWebToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const signIn = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user != null && req.body.role == user.role) {
    let isValidPass = await bcrypt.compare(req.body.password, user.password);
    if (isValidPass) {
      let token = await createWebToken(user._id);
      res.json({
        success: true,
        message: "Login successfully",
        data: user,
        token: token,
      });
    } else {
      res.status(401).json({
        success: false,
        error: "invalid password",
      });
    }
  } else {
    res.status(401).json({
      success: false,
      error: "invalid user",
    });
  }
};

module.exports = signIn;
