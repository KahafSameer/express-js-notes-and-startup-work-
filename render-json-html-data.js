const express = require("express");
const app = express();

app.get("", (req, res) => {
    res.send(`
        <input type="text" placeholder="Your Name">
        <a href="/about">About page is here mr sameer</a>
        <button>Submit</button>
    `)
})

app.get("/contact", (req, res) => {
    res.send(

        '<h2>helloo app is here mr sameer</h2>' +
        '<a href="/">Home page is here mr sameer</a>' +
        '<a href="/about">About page is here mr sameer</a>' +
        '<a href="/contact">Contact page is here mr sameer</a>'

    )
})
app.get('/about', (req, res) => {
    res.send([
        {
            name: 'Kahaf',
            age: 22,
            city: 'Karachi'
        },
        {
            name: 'Kahaf',
            age: 22,
            city: 'Karachi'

        },
        { name: 'bilal', age: 22, city: 'karachi' },
    ])
})
app.listen(1000, () => {
    console.log("Server is running on port 1000");
});