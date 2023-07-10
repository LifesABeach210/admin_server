var mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    _id:String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  {timestamps:true}
  // auto creates date and update date
);

module.exports = mongoose.model("Product", ProductSchema);
