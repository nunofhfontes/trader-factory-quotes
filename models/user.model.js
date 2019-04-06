const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    symbols: [{
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Quote'
        }
    }],
    portofolioId: {type: Number, required: true},
});

module.exports = mongoose.model('User', UserSchema);