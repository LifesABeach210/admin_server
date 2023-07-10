const { promiseHooks } = require("v8");
var Product = require("../models/Product");
var ProductStat = require("../models/ProductStat");
var User = require('../models/User')
module.exports = {
  getProducts: async (req, res) => {
    try {
      const products = await Product.find();
      const productWithStat = await Promise.all(
        products.map(async (product) => {
          const stat = await ProductStat.find({ productId: product._id });
          return {
            ...product._doc,
            stat,
          };
        })
      );
      res.status(200).json(productWithStat)
    } catch (error) {
      res.status(403).json({ message: "hello"});
    }
  },

  getCustomers: async (req, res) => {
    try {
      const customers = await User.find({role:'user'}).select("-password");
    
       
      res.status(200).json(customers)
    } catch (error) {
      res.status(403).json({ message: error.message});
    }
  },
};



