const USER = require("../models/User");

async function viewProfile(req,res){
    const user = await USER.findById(req.user);
    console.log(req.user);
    console.log(user);
    if(!user){
        res.status(500).json({
            success:false,
            msg:"Server error 2"
        });
    }else{
        res.status(200).json({
            success:true,
            name:user.name,
            email:user.email
        });
    }
}

module.exports= {
    viewProfile
};