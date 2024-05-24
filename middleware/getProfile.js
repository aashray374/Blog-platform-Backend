const USER = require("../models/User");

async function getUserDetails(req,res,next){
    const id = req.user.id;
    const User = await USER.findById(id).select("-password");

    req.UserDetails = User;
    next();
}