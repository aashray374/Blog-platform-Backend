const BLOG = require("../models/Blog");

async function BlogOfUser(req,res){
    try {
        const Blogs = await BLOG.find({ByUser:req.user._id})
        res.status(200).json({
            success:true,
            Blogs:Blogs
        });
    } catch (error) {
        console.log(`${error}`);
        res.status(500).json({
            success:false,
            msg:"Server Error"
        });
    }
}