const express = require("express");
const app = express();

app.get("", (req, res) => {
    res.send("Good moring Kahaf Sameer");
})
app.get('/contact', (req, res) => {
    res.send("Contact page")
})
app.listen(1000, () => {
    console.log("Server is running on port 3000");
})
