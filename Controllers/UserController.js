const User = require("../Models/User");

//add user
const addUser = async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    role: req.body.role,
  });
  res.json({
    message: `add user as ${user.role}`,
    data: user,
  });
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
module.exports = {
  addUser,
  getUsers,
  getUserById,
};
