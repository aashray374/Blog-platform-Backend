const mongoose = require("mongoose");


const commentSchema  = new mongoose.Schema({
    by:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})


const BlogSchema = new mongoose.Schema({
    ByUser:{
        type:String,
        required:true
    },
    Body:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    likedBy:[{
        type: String
    }],
    comments:[commentSchema]
},{timestamps:true});


module.exports = mongoose.model("BLOG",BlogSchema);