const BLOG = require("../models/Blog");

async function CreateBlog(req,res){
    const id = req.header("id");
    const {title, body} =req.body;
    try {
        const blog = new BLOG();
        blog.ByUser = id;
        blog.Body=body;
        blog.title=title;
        await blog.save();

        res.status(200).json({
            success:true,
            msg:"Blog Added Successfully"
        });

    } catch (error) {
        console.log(`${error}`);
        res.status(500).json({
            success:false,
            msg:"Server Error"
        });
    }
}

async function addLike(req,res){
    const BlogId = req.header("BlogId");
    const {UserId} = req.body;

    try {
        const blog = await BLOG.findById(BlogId);
        if(!blog){
            res.status().json({
                success:false,
                msg:"Blog does not Exists"
            });
        }else{
            const liked = blog.likedBy.includes(UserId);
            if(liked){
                res.status().json({
                    success:false,
                    msg:"User has already liked this"
                });
            }else{
                blog.likedBy.push(UserId);
                await blog.save();

                res.status(200).json({
                    success:true,
                    msg:"like added"
                });
            }
        }
    } catch (error) {
        console.log(`${error}`);
        res.status(500).json({
            success:false,
            msg:"Server Error"
        });
    }
}

module.exports = {
    CreateBlog,
    addLike
};