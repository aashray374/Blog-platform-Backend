const USER = require("../models/User");

async function viewProfile(req,res){
    const user = await USER.findById(req.user._id);
    if(!user){
        res.stats(500).json({
            success:false,
            msg:"Server error"
        });
    }else{
        res.stats(200).json({
            success:true,
            user:user
        });
    }
}