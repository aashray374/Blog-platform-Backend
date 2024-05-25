const USER = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function LoginUser(req, res) {
    const { email, password } = req.body;

    try {
        const getUser = await USER.findOne({ email: email });

        if (!getUser) {
            return res.status(409).json({
                success: false,
                msg: "User Does Not Exist"
            });
        }

        const isMatch = await bcrypt.compare(password, getUser.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                msg: "Invalid Password"
            });
        }

        const payload = {
            user: {
                id: getUser._id
            }
        };

        jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    msg: "Token not generated"
                });
            } else {
                return res.status(200).json({
                    success: true,
                    msg: "Login Successful",
                    token: token
                });
            }
        });

    } catch (error) {
        console.error("Server error:", error);
        return res.status(500).json({
            success: false,
            msg: "Server error"
        });
    }
}

module.exports = {
    LoginUser
};
