const mongoose = require('mongoose');
const { database } = require("./config");

mongoose.connect(database.url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(db => console.log('Batabase successfully connected.'))
.catch(err => console.log(err))

module.exports = mongoose;