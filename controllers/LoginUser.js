const USER = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function LoginUser(req,res){
    const {email,password} = req.body;
    const getUser = await USER.findOne({email:email});
    if(getUser){
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(401).json({
                success:false,
                msg:"Invalid Password"
            });
        }else{
            const payolad = {
                getUser:{
                    _id:getUser._id
                }
            };

            await jwt.sign(payolad,process.env.SECRET,
                (err,token)=>{
                    if(err){
                        res.status(501).json({
                            success:false,
                            msg:"token not generated"
                        });
                    }else{
                        res.status(200).json({
                            success:true,
                            msg:"Login Successfull",
                            token:token
                        });
                    }
                }
            )

        }
    }else{
        res.status(409).json({
            success:false,
            msg:"User Does Not Exists"
        });
    }
}