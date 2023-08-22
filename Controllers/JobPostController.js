const PostJob = require("../Models/PostJob");

const postJob = async (req, res) => {
  const post = await PostJob.create({
    jobTitle: req.body.jobTitle,
    jobLocation: req.body.jobLocation,
    jobCategory: req.body.jobCategory,
    jobDescription: req.body.jobDescription,
    jobRequirement: req.body.jobRequirement,
    jobSalary: req.body.jobSalary,
    deadline: req.body.deadline,
    jobType: req.body.jobType,
    applicationEmail: req.body.applicationEmail,
    previousExperience: req.body.previousExperience,
    Qaulification: req.body.Qaulification,
    companyName: req.body.companyName,
    companyWebsite: req.body.companyWebsite,
    companyDescription: req.body.companyDescription,
    companyLogo: "upload/" + req.file.filename,
    vacancy: req.body.vacancy,
  });
  res.json({
    message: "post job succesfully",
    data: post,
  });
};

const postsGet = async (req, res) => {
  const getPosts = await PostJob.find({});
  res.json({
    message: "successfully fetch jobs",
    data: getPosts,
  });
};

const postsGetById = async (req, res) => {
  const getPostsbyid = await PostJob.findById(req.params.id);
  res.json({
    message: "successfully fetch jobs",
    data: getPostsbyid,
  });
};

const getJobByCateg = async (req, res) => {
  const getJob = await PostJob.find({ jobCategory: req.body.jobCategory });
  res.json({
    message: "fetch jobs by category",
    data: getJob,
  });
};

const getJobByType = async (req, res) => {
  const getJob = await PostJob.find({ jobType: req.body.jobType });
  res.json({
    message: "fetch jobs by type",
    data: getJob,
  });
};
module.exports = {
  postJob,
  postsGet,
  postsGetById,
  getJobByCateg,
  getJobByType,
};
