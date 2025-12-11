const express = require("express");
const path = require("path");
const app = express();

const public = path.join(__dirname, 'public')
console.log(public)
//jab b hum ne static content ko render krwaana hota hai to hum use methode ka use krte hai  
//express ki jaga app use nai krna q k static methode hmara executable methode nai hota ye hmara non executable method hota hai
app.use(express.static(public))
//ye static content ko render krta hai
app.listen(2000, () => {
    console.log("Server is running on port 2000");
});
//static pages sese pages jin pr run time mee koi b changes nai honi to content fix hota hai change nai hota ose static content hota hai