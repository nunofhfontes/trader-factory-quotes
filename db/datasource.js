
let mongoose = require('mongoose');

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'quotedb';      // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this._connect()
  }
  _connect() {
     mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true })
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

//consider exporting the class and not the instance
module.exports = new Database();