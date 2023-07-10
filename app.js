var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var dotenv = require("dotenv");
var mongoose = require("mongoose");
var cors = require("cors");
var generalRouter = require("./routes/general");
var clientRouter = require("./routes/client");
var salesRouter = require("./routes/sales");
var managementRouter = require("./routes/management");
var morgan = require("morgan");
dotenv.config();
var app = express();
var Product = require('./models/Product')
var ProductStat = require('./models/ProductStat')
var Transactions = require('./models/Transactions')
var {dataProduct,dataProductStat,dataTransaction} = require('./data/dataPage')
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan("common"));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/", generalRouter);
app.use("/client", clientRouter);
app.use("/sales", salesRouter);
app.use("/management", managementRouter);

var mongooseOptions = {
  dbName: "admin_dash",
  //ask how this is getting to connected without reference
};
mongoose.connect(process.env.MONGO_URI, mongooseOptions).then(() => {
  console.log("db connected ");

});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
