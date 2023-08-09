const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  addUser,
  getUsers,
  getUserById,
} = require("../Controllers/UserController");
const {
  postJob,
  postsGet,
  postsGetById,
  getJobByCateg,
} = require("../Controllers/JobPostController");
const signIn = require("../Controllers/AuthController");
const {
  createCateg,
  getCategory,
} = require("../Controllers/CategoryController");
//----file store
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/upload/");
  },
  filename: function (req, file, cb) {
    var datetime = Date.now();
    cb(null, datetime + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage });
// user routes
router.post("/add/user", addUser);
router.get("/get/users", getUsers);
router.get("/get/user/:id", getUserById);

// post job
router.post("/post/job", upload.single("companyLogo"), postJob);
router.get("/get/jobs", postsGet);
router.get("/get/job/:id", postsGetById);
router.post("/get/jobs/categ", getJobByCateg);

//auth
router.post("/login/user", signIn);

//Category for job
router.post("/job/categ", createCateg);
router.get("/get/categ", getCategory);

module.exports = router;
