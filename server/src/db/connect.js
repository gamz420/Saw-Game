const { connect, disconnect } = require('mongoose');
const { dbConnectionURL, options } = require('./config');

function dbConnect() {
  connect(dbConnectionURL, options, (err) => {
    if (err) return console.log(err)
    console.log('Success connected to mongo')
  })
};

module.exports = { dbConnect, disconnect };
