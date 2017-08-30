const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOLAB_CRIMSON_URI || 'mongodb://localhost/digibook')
console.log('db connected')

module.exports = mongoose
