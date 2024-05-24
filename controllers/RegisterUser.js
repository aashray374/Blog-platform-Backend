const USER = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function RegisterNewUser(req,res){
    const {name,email,password} = req.body
    try {
        const getUser = await USER.findOne({email:email});
        if(!getUser){
            let user = new USER();
            user.name = name;
            user.email = email;

            let salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password,salt);

            await user.save();

            const payload = {
                user:{
                    id:user.id
                }
            };

            jwt.sign(payload,process.env.SECRET,
                (err,token)=>{
                    if(err){
                        res.status(501).json({
                            success:false,
                            msg:"unable to generate token"
                        });
                    }else{
                        res.status(200).json({
                            success:true,
                            msg:"User Registered Successfully",
                            token:token
                        })
                    }
                }
            );

        }else{
            res.status(409).json({
                success:false,
                msg:"User Already exists",
            });
        }
    } catch (error) {
        res.status(501).json({
            success:false,
            msg:"server error"
        });
    }
}

module.exports = {
    RegisterNewUser
}