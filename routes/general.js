var generalController = require("../controllers/general");
var express = require("express");

var router = express.Router();

/* GET home page. */
router.get("/user/:id", function (req, res) {
  generalController.getUser(req, res);
});

module.exports = router;
