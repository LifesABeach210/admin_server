var mongoose = require("mongoose");

const TransactionsSchema = new mongoose.Schema(
    {
        userId: String,
        cost: String,
        products: {
          type: [mongoose.Types.ObjectId],
          of: Number,
        },
      },
      { timestamps: true }
    );
  // auto creates date and update date


module.exports = mongoose.model("Transactions", TransactionsSchema);
