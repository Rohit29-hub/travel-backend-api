const mongoose = require('mongoose')
const userContact = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    phoneNum : String,
    message : String, 
})

const userContactInfo = mongoose.model("userContactInfo", userContact)

module.exports = userContactInfo;