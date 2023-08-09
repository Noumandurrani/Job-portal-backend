const Category = require("../Models/Category");
const createCateg = async (req, res) => {
  let categoryForJob = await Category.findOne({
    jobCategory: req.body.jobCategory,
  });
  if (categoryForJob == null) {
    const PostCateg = Category.create({
      jobCategory: req.body.jobCategory,
    });
    res.json({
      message: "categ creted",
      data: PostCateg,
    });
  } else {
    res.json({
      message: "categ already exist",
    });
  }
};

const getCategory = async (req, res) => {
  const category = await Category.find({});
  res.json({
    message: "categories fetch",
    data: category,
  });
};
module.exports = {
  createCateg,
  getCategory,
};
