const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//convert to Mongoose Schema
const tickerSchema = {
    symbol: String,
    timestamp: Date,
    trading:{
      week52High: Number,
      week52Low: Number,
      percent_shorted: Number,
      shares_outstanding: Number,
      enterprise_value: Number,
      dividend: Number,
      market_cap: Number,
      price: Number
    },
    name: String,
    about: String,
    timeseries: {
      oneDay: Object,
      oneMonth: Object,
      threeMonths: Object,
      oneYear: Object,
      fiveYears: Object
    },
    quote: {
      fundamental: Object,
      price: Object,
      asset_type: String,
      time: String,
      exchange: String,
    },  
   financials: {
    fcf_over_share: Number,
    fcf: Number,
    eps_margin: Number,
    eps: Number,
    ebitda_margin: Number,
    ebitda: Number,
    revenue_growth_3_yr: Number,
    revenue: Number
   }, 
  };

  module.exports = mongoose.model('Ticker', tickerSchema);