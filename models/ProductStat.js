var mongoose = require("mongoose");

const ProductStatSchema = new mongoose.Schema(
  {
    productId: String,
    _id:String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthData: {
      month: String,
      totalSales: Number,
      totalUnits: Number,
    },
    dailyData: {
      date: String,
      totalSales: Number,
      totalUnits: Number,
    },
  },
  { timestamps: true }
  // auto creates date and update date
);

module.exports = mongoose.model("ProductStat", ProductStatSchema);
