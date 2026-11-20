require("dotenv").config();
const mongoose = require("mongoose");
const contactDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("error while connecting to db", error);
    }
}
module.exports = contactDB;
