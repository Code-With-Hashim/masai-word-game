const mongoose = require('mongoose')

const userDetailSchema = mongoose.Schema({
    level: { type: String, enum: ['High', 'Medium', 'Low'], required: true },
    name: { type: String, required: true },
    score: { type: Number, required: true }
})  // userDetail Schama Design for mongoDB


const userDetailModal = mongoose.model('user_detail', userDetailSchema)  // modal set 

module.exports = { userDetailModal }