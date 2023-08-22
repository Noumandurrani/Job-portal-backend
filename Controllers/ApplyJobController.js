const ApplyForJob = require("../Models/ApplyForJob");

const applyJob = async (req, res) => {
  // try {
  const applyJob = await ApplyForJob.create({
    name: req.body.name,
    email: req.body.email,
    portforlio: req.body.portforlio,
    coverLetter: req.body.coverLetter,
    resume: "upload/" + req.file.filename,
    userId: req.body.userId,
    jobId: req.body.jobId,
  });
  res.json({
    message: "applied",
    data: applyJob,
  });
  // } catch (err) {
  //   res.status(401).json({
  //     error: "error: " + err,
  //   });
  // }
};

//get by userId
const getByUserId = async (req, res) => {
  // try {
  const getbyuserid = await ApplyForJob.find({ jobId: req.body.jobId });
  res.json({
    message: "successfully fetch applied job ",
    data: getbyuserid,
  });
  // } catch (err) {
  //   res.status(400).json({
  //     error: err,
  //   });
  // }
};

//exports
module.exports = {
  applyJob,
  getByUserId,
};
