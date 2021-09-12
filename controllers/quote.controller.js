var request = require('request');
const Quote = require('../models/quote.model');

//vars for program flow
var stockQuotesWebsite = "https://www.alphavantage.co/query?";
var stockQuotesFunction = "";
var sotckQuotesSymbol = "";
var stockQuotesApiUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&outputsize=compact&apikey=1OT6J4YHUI0QOWB3";

let testRequest2API = true;

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Quotes Test controller!');
};


//Get stock quotes for symbol X
//FIXME - request is deprecated,change to another lib (Axios probably)
if(testRequest2API){
    request(stockQuotesApiUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //console.log(body) // Print the google web page.
            var apiResponse = body;
            console.log('typeof ----->> ', typeof apiResponse);
            console.log(apiResponse);
        } else {
            console.log("ERROR");
        }
    });
}