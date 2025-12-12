const express = require("express");
const app = express();
const Employee = require("./models/employmodel");
const connectDB = require("./db/db_connection");
connectDB();

const addEmployee = async () => {
    await Employee.create({
        name: "John Doe",
        email: "john.doe@example.com",
        position: "Software Engineer",
        department: "IT"
    })
}



addEmployee();

const getEmployee = async () => {
    const employee = await Employee.find();
    console.log(employee);
}

getEmployee();

app.listen(1000, () => {
    console.log("Server is running on port 1000");
})






