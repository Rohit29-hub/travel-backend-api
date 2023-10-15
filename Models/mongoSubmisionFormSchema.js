const mongoose = require('mongoose')

const userFormSubmision = mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    country : String,
    zipCode : String,
    city : String,
    state : String,
    purposeTravel : String,
    phoneNum : String,
    destinations : String,
    date : String,
    budget : String,
    message : String,
})

const userSubmisionForm = mongoose.model('userSubmisionForm', userFormSubmision);
module.exports = userSubmisionForm;