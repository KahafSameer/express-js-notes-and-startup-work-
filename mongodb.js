// server.js
require("dotenv").config();
const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// DB Connection
const contactDB = require("./db/db_connection");
contactDB();

// User Model
const User = require("./models/usermodel");

const addUser = async () => {
    try {
        await User.create({
            name: "Kahaf Sameer",
            email: "kahafsameer1@gmail.com"
        });
        console.log("User added successfully");
    } catch (error) {
        console.log("error while adding user", error);
    }
}
addUser();
app.listen(1000, () => {
    console.log("Server is running on port 1000");
});