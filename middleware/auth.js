const jwt = require("jsonwebtoken");

function isValidRequest(req, res, next) {
    const token = req.header("auth");

    if (!token) {
        return res.status(401).json({
            success: false,
            msg: "No token found"
        });
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                success: false,
                msg: "Token Invalid"
            });
        } 
        console.log(decoded.user);
        req.user = decoded.user.id;
        next();
    });
}

module.exports = {
    isValidRequest
};
