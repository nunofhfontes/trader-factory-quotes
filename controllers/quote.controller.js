const Quote = require('../models/quote.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Quotes Test controller!');
};