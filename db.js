require("dotenv").config();
const mongoose = require("mongoose");

// MpyUSTd0oOTuwwIp
const MONGODB_URL ="mongodb://localhost:27017"
const connectDB = async() => {
    // Connect to MongoDB using Mongoose
   await mongoose.connect(MONGODB_URL)
    .then(()=>{console.log("Successfully connected to MongoDB")})
    .catch((err)=>{console.log(`Failed to connect to MongoDB: ${err}`)})
}

module.exports = {connectDB};

