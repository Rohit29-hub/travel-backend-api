const mongoose = require('mongoose')
const env = require('./env')


// mongodb database url 
const mongoDBURL = env.DATABASE_URL;

// connect mongodb 
const connectDB = async () => {
    try {
        await mongoose.connect(mongoDBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectDB;