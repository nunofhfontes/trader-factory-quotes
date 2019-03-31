const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const quote_controller = require('../controllers/quote.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', quote_controller.test);

module.exports = router;