const mongoose = require("mongoose");

async function db(){
    try {
        await mongoose.connect(process.env.MONGO_URL);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    db
};