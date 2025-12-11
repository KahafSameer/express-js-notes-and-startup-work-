//remove file extension and render 404 pages. page not found
const express = require("express");
const path = require("path");
const app = express();

const public = path.join(__dirname, 'public')
console.log(public)

app.get('/', (req, res) => {
    res.sendFile(`${public}/index.html`)
})

app.get('/home', (req, res) => {
    res.sendFile(`${public}/home.html`)
})

app.use((req, res) => {
    res.status(404).sendFile(`${public}/pagenotfount.html`)
})


app.listen(1000, () => {
    console.log("Server is running on port 1000");
});




//remove file extension and render 404 pages. page not found
