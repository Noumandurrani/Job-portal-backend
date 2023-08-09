const mongoose = require("mongoose");
const jobCategorySchema = new mongoose.Schema(
  {
    jobCategory: {
      type: String,
    },
  },
  { timestamps: true }
);
const Category = mongoose.model("Category", jobCategorySchema);
module.exports = Category;
