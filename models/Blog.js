const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    ByUser:{
        type:String,
        required:true
    },
    Content:{
        type:String,
        required:true
    }
},{timestamps:true});


module.exports = mongoose.model("BLOG",BlogSchema);