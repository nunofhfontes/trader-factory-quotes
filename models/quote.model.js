const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EquitySchema = new Schema({
    equity: {type: [Schema.Types.Mixed], required: false}
});
var Equity = mongoose.model('Equity', EquitySchema);

let QuoteSchema = new Schema({
    name: {type: String, required: true},
    symbol: {type: String, required: true},
    lastUpdate: {type: String, required: true},
    info: {type: [Schema.Types.Mixed], required: true},
});
var Quote = mongoose.model('Quote', QuoteSchema);

let YearSchema = new Schema({
    year: {type: Date},
    months: {type: [Schema.Types.Mixed], required: false}
});
var Year = mongoose.model('Year', YearSchema);

let MonthSchema = new Schema({
    month: {type: Date},
    days: {type: [Schema.Types.Mixed], required: false}
});
var Month = mongoose.model('Month', MonthSchema);

let DaySchema = new Schema({
    day: {type: Date},
    hours: {type: [Schema.Types.Mixed], required: false}
});
var Day = mongoose.model('Day', DaySchema);

let HourSchema = new Schema({
    hour: {type: Date},
    minutes: {type: [Schema.Types.Mixed], required: false}
});
var Hour = mongoose.model('Hour', HourSchema);

let EquityInfoSchema = new Schema({
    minute: {type: Date, required: true},
    open: {type: String, required: true},
    high: {type: String, required: true},
    low: {type: String, required: true},
    close: {type: String, required: true},
    volume: {type: String, required: true}
});
var EquityInfo = mongoose.model('EquityInfo', EquityInfoSchema);

// Export the model
//module.exports = mongoose.model('Quote', QuoteSchema);
module.exports = {
    Equity: Equity,
    Quote: Quote,
    Year: Year,
    Month: Month,
    Day: Day,
    Hour: Hour,
    EquityInfo: EquityInfo
};
