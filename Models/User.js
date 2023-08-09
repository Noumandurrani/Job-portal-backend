const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    role: {
      type: String,
    },
    phone: {
      type: String,
    },
    // terms_condition: {
    //   type: Boolean,
    //   required: [true, "required terms and condition"],
    // },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
