const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  addUser,
  getUsers,
  getUserById,
  getByRole,
} = require("../Controllers/UserController");
const {
  postJob,
  postsGet,
  postsGetById,
  getJobByCateg,
  getJobByType,
} = require("../Controllers/JobPostController");
const signIn = require("../Controllers/AuthController");
const {
  createCateg,
  getCategory,
} = require("../Controllers/CategoryController");
const { applyJob, getByUserId } = require("../Controllers/ApplyJobController");
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
router.post("/get/role", getByRole);

// post job
router.post("/post/job", upload.single("companyLogo"), postJob);
router.get("/get/jobs", postsGet);
router.get("/get/job/:id", postsGetById);
router.post("/get/jobs/categ", getJobByCateg);
router.post("/get/jobs/type", getJobByType);

//auth
router.post("/login/user", signIn);

//Category for job
router.post("/job/categ", createCateg);
router.get("/get/categ", getCategory);

//Apply for job
router.post("/Apply/job", upload.single("resume"), applyJob);
router.post("/get/applied/job", getByUserId);

module.exports = router;
