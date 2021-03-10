var request = require('request');
const Quote = require('../models/quote.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Quotes Test controller!');
};


//Get stock quotes for symbol X
request(stockQuotesApiUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        //console.log(body) // Print the google web page.
        var apiResponse = body;
        console.log('typeof ----->> ', typeof apiResponse);
        console.log(apiResponse);
    } else {
        console.log("ERROR");
    }
})