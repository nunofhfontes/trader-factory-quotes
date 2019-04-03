const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    symbols: {type: Array, required: false},
    portofolioId: {type: Number, required: true},
});

/* let QuotePortfolioSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
}); */

let QuoteSchema = new Schema({
    symbol: {type: String, required: true, max: 100},
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});

// Export the model
module.exports = mongoose.model('Quote', QuoteSchema);
module.exports = mongoose.model('User', UserSchema);