var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// Require the controllers WHICH WE DID NOT CREATE YET!!
const quote_controller = require('../controllers/quote.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', quote_controller.test);




module.exports = router;
