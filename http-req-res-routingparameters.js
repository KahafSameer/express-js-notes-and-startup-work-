const express = require("express");
const app = express();
app.get("", (req, res) => {
    // res.send("Kahaf Sameer Devops Engineer");
    const name = req.query.name;
    // res.send(`wellcom ${name}`);

    if (name) {
        res.send(`wellcom ${name}`);
    }
    else {
        res.send("Please provide a name");
    }
})
app.get("/about", (req, res) => {
    res.send("About page");
});
app.listen(1000, () => {
    console.log("Server is running on port 3000");
});