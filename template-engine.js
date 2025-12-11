//render dynamic data with ejs template engine in express js
const express = require("express"); //express module
const app = express(); //express app

app.set("view engine", "ejs"); //set view engine

app.get("/wellcome", (req, res) => { //route handler
    const empinfo = { //employee information
        name: "Sameer",
        age: 25,
        city: "Hyderabad"
    }
    res.render("wellcome", { empinfo }); //render template
})

app.listen(1000, () => {
    console.log("Server is running on port 1000"); //server running
});