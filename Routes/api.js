const express = require("express");
const router = express.Router();
const {
  addUser,
  getUsers,
  getUserById,
} = require("../Controllers/UserController");

// user routes
router.post("/add/user", addUser);
router.get("/get/users", getUsers);
router.get("/get/user/:id", getUserById);

module.exports = router;
