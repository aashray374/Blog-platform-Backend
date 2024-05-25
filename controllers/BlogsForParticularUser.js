const BLOG = require("../models/Blog");

async function BlogOfUser(req,res){
    try {
        const {id} = req.body;
        const Blogs = await BLOG.find({ByUser: id});
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