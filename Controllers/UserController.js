const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
///jsonwebtoken
const createToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
//add user
const addUser = async (req, res) => {
  try {
    // if (req.body.terms_condition == true) {
    if (req.body.role) {
      if (req.body.confirmPassword == req.body.password) {
        // encrypted password
        let salt = await bcrypt.genSalt();
        let encryptPassword = await bcrypt.hash(req.body.password, salt);
        const user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: encryptPassword,
          phone: req.body.phone,
          role: req.body.role,
          // terms_condition: req.body.terms_condition,
        });
        let token = await createToken(user.id);

        res.json({
          message: `add user as ${user.role}`,
          data: user,
          token: token,
        });
      } else {
        res.json({
          message: "confirm password != new password",
        });
      }
    } else {
      res.json({
        message: "define role first",
      });
    }

    // } else {
    //   res.json({
    //     message: "plz accept terms and conditions",
    //   });
    // }
  } catch (err) {
    console.error("error found:", err);
  }
};
// get users
const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json({
    message: "fetch user",
    data: users,
  });
};

// getUserbyid
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json({
    message: "fetch user",
    data: user,
  });
};

// getCandidate
const getByRole = async (req, res) => {
  const user = await User.find({ role: req.body.role });
  res.json({
    message: "fetch user",
    data: user,
  });
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
  getByRole,
};
