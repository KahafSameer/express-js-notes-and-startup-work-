const express = require("express");
const app = express();
const reqfilter = require("./middleware");
const route = express.Router();

route.use(reqfilter);

route.get("/", (req, res) => {
    res.send("Hello Kahaf Sameer! This is middleware demo.");
});

route.get("/about", (req, res) => {
    res.send("About page is here");
});

app.get("/contact", (req, res) => {
    res.send("Contact page is here");
});

app.get("/help", (req, res) => {
    res.send("Help page is here");
});

app.use('/', route)
app.listen(1000, () => {
    console.log("Server is running on port 1000");
});