var express = require('express');
var router = express.Router();
var clientController = require('../controllers/client')
/* GET users listing. */
router.get('/products', function(req, res, next) {
  clientController.getProducts(req,res)
});

router.get('/customers',function(req,res){
  clientController.getCustomers(req,res)
})

module.exports = router;
