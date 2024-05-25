const BLOG = require("../models/Blog");

async function addComment(req,res){
    const BlogId = req.header("Blog");
    const {userId,text} = req.body;
    try {
        const comment = {
            userId,
            text
        };

        const blog = await BLOG.findById(BlogId);

        blog.comments.push(comment);
    } catch (error) {
        console.log(`${error}`);
        res.status(500).json({
            success:false,
            msg:"Srever Error"
        });
    }
}