var express = require('express');
var router = express.Router();

console.log('routes - users.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({'message': 'respond with a resource'});
});

module.exports = router;
