const mongoose = require("mongoose");
const jobPostScheme = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: [true, "job title is required"],
    },
    jobLocation: {
      type: String,
      required: [true, "job location is required"],
    },
    applicationEmail: {
      type: String,
      required: [true, "job email is required"],
    },
    jobType: {
      type: String,
      required: [true, "job type is required"],
    },
    jobCategory: {
      type: String,
      required: [true, "job category is required"],
    },
    jobSalary: {
      type: String,
      required: [true, "job Salary is required"],
    },
    deadline: {
      type: String,
      required: [true, "Dealine is required"],
    },
    jobDescription: {
      type: String,
      required: [true, "job description is required"],
    },
    jobRequirement: {
      type: String,
      required: [true, "job Requirement is required"],
    },
    Qaulification: {
      type: String,
      required: [true, "Qaulification is required"],
    },
    previousExperience: {
      type: String,
    },
    companyName: {
      type: String,
      required: [true, "companyName is required"],
    },
    companyWebsite: {
      type: String,
      // required: [true, "companyWebsite is required"],
    },
    companyDescription: {
      type: String,
      required: [true, "company Description is required"],
    },
    companyLogo: {
      type: String,
      default: "",
      // required: [true, "company Description is required"],
    },
    vacancy: {
      type: String,
      // required: [true, "company Description is required"],
    },
  },
  { timestamps: true }
);
const PostJob = mongoose.model("PostJob", jobPostScheme);
module.exports = PostJob;
