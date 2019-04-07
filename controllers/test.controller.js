const Quote = require('../models/quote.model');
const fs = require('fs');

function testInsertion() {

    var example3 = "";

    console.log('This is before the read call');

    fs.readFile('./models/example3.json', (err, data) => {
        if (err) throw err;
        example3 = JSON.parse(data);
        console.log(example3);
        console.log("typeof ( example3 ) -->> ", typeof example3);
    });

    console.log('This is after the read call');
}

module.exports = function (msg) { 
    testInsertion();
};
