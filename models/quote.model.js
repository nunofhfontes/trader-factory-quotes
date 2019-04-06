const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuoteSchema = new Schema({

    //a brief info about the security
    symbol: {type: String, required: true, max: 100},
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},

    //insert the entire service's response here

});

// Export the model
module.exports = mongoose.model('Quote', QuoteSchema);
