const jwt = require("jsonwebtoken");

function isValidRequest(req,res,next){
    const token = req.header("auth");

    if(!token){
        res.status(401).json({
            success:false,
            msg:"No token found"
        });
    }else{
        try {
            jwt.verify(token, process.env.SECRET,
                (err, decoded) => {
                    if (err) {
                        res.status(401).json({
                            success: false,
                            msg: "Token Invald"
                        });
                    } else {
                        req.user = decoded.user._id;
                        next();
                    }
                }
            )
        } catch (error) {
            res.status(500).json({
                success:false,
                msg:"Server error"
            });
        }
    }
}