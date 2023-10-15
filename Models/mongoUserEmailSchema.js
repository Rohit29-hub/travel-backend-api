const mongoose = require('mongoose');

// Define the schema for userEmail collection
const userEmailSchema = new mongoose.Schema({
  email: String,
});

// Create the model
const UserEmail = mongoose.model('UserEmail', userEmailSchema);

module.exports = UserEmail;