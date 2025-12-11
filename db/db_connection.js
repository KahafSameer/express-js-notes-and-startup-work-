const mongoose = require("mongoose");
const contactDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://kahafsameer1_db_user:***REMOVED***@cluster0.dbrpnku.mongodb.net/?appName=Cluster0`);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("error while connecting to db", error);
    }
}
module.exports = contactDB;
