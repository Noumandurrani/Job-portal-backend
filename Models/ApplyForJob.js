const mongoose = require("mongoose");
const jobApplySchema = new mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      // unique: true,
    },
    name: {
      type: String,
    },
    portforlio: {
      type: String,
    },
    resume: {
      type: String,
      default: "",
    },
    coverLetter: {
      type: String,
    },
    userId: {
      type: String,
    },
    jobId: {
      type: String,
    },
  },
  { timestamps: true }
);
const ApplyForJob = mongoose.model("ApplyForJob", jobApplySchema);
module.exports = ApplyForJob;
