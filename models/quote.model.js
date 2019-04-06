const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuoteSchema = new Schema({

    //a brief info about the security
    symbol: {type: String, required: true},
    name: {type: String, required: false},
    price: {type: Number, required: true},

    //insert the entire service's response here

});
var Quote = mongoose.model('Quote', QuoteSchema);

let EquitySchema = new Schema({
    equity: {type: Array, required: false}
});
var Equity = mongoose.model('Equity', EquitySchema);



// Export the model
//module.exports = mongoose.model('Quote', QuoteSchema);

module.exports = {
    Quote: Quote,
    Equity: Equity

    /*
    Answer: Answer,
    Module: Module,
    Role: Role
    */
};
