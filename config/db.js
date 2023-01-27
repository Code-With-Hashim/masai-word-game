const mongoose = require('mongoose') //mongoose functionality access

const connect = mongoose.connect(process.env.MONGO_DB_URL) //mongodb url

module.exports = {connect} //export the connect function to linked the connection between db and server