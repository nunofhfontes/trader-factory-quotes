const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const quote_controller = require('../controllers/quote.controller');
const test_controller = require('../controllers/test.controller');

console.log("typeof test_controller: ", typeof test_controller);

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', quote_controller.test);

// test insertion json insertion into mongodb
router.get('/test/insertion', test_controller.testInsertion());

module.exports = router;