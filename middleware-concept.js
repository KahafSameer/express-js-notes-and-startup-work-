const express = require("express"); // express module import
const app = express(); // express app create

// Custom middleware function
const reqfilter = (req, res, next) => {
    const salary = req.query.salary; // salary query param read karega

    // Agar salary > 5000 hai
    if (salary < 50000) {
        res.send("✅ not Eligible for this job");
    }
    // Agar salary param hi nahi diya
    else if (!salary) {
        res.send("⚠️ Please provide salary");
    }
    // // Agar salary < 5000 hai
    // else if (salary < 5000) {
    //     res.send("❌ Not Eligible for this job");
    // }
    // Agar koi aur case ho to request ko next middleware/route pe bhej do
    else {
        next();
    }
}

// Application-level middleware lagana
// Ye har route ke liye run hoga pehle
app.use(reqfilter);

// Routes
app.get("/", (req, res) => { // route handler
    res.send("Hello Kahaf Sameer! This is middleware demo."); // response message
});

app.get("/about", (req, res) => { // route handler
    res.send("About page is here"); // response message
});

app.get("/contact", (req, res) => { // route handler
    res.send("Contact page is here"); // response message
});

app.get("/help", (req, res) => { // route handler
    res.send("Help page is here"); // response message
});

// Server start
app.listen(1000, () => { // server running
    console.log("🚀 Server is running on port 1000"); // log message
});




// Middleware Concept
// Middleware ek function hota hai jo Express.js ke request-response cycle ke beech run hota hai.
// Is function ko 3 cheezon ka access hota hai: req (request object), res (response object), aur next() (jo agle middleware/route ko call karta hai).
// Matlab middleware ek bridge hai jo request aur response ke darmiyan hota hai, aur hum isme request ko modify, validate ya response ko customize kar sakte hain.
// middle ware siraf routes pr apply hota hai
// Advantages of Middleware:
// 1. Authentication & Authorization (agar user login nahi hai to block karna)
// 2. Error Handling (centralized error handling, har route me try/catch likhne ki zaroorat nahi)
// 3. Code Reusability (ek hi middleware multiple routes pe apply ho sakta hai)
// 4. Logging & Monitoring (request details log karna, jaise IP, method, URL)
// 5. Data Validation (request body/params ko check karna before route handler)

// Types of Middleware:
// 1. Application-level middleware:
//    - Directly app.use() ya app.get() ke sath lagta hai
//    - Example: app.use((req, res, next) => { console.log("Request URL:", req.url); next(); })

// 2. Router-level middleware:
//    - Specific routes ke liye lagta hai using express.Router()
//    - Example: router.use("/about", (req, res, next) => { console.log("About route middleware"); next(); })

// 3. Error-handling middleware:
//    - 4 arguments hote hain: (err, req, res, next)
//    - Example: app.use((err, req, res, next) => { console.error(err.stack); res.status(500).send("Something broke!"); })

// 4. Built-in middleware:
//    - Express ke andar already available hote hain
//    - Example: express.json(), express.static()

// 5. Third-party middleware:
//    - External libraries jo extra features deti hain
//    - Example: morgan (logging), cors (cross-origin requests), helmet (security headers)