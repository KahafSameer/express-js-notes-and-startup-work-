const reqfilter = (req, res, next) => {
    const salary = req.query.salary;
    if (!salary) {
        res.send("No Salary Provided")
    }
    else if (salary < 50000) {
        res.send("Your Salary is below 50k")
    }
    else {
        next();
    }
}

module.exports = reqfilter;