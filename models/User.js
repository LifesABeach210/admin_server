var mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      min: 2,
      max: 50,
      unique: true,
    },
    passowrd: {
      type: String,
      required: true,
      min: 5,
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    _id: String,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"], //determines the role of the user
      default: "admin",
    },
  },
  { timestamps: true } // auto creates date and update date
);

module.exports = mongoose.model("User", UserSchema);
