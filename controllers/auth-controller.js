require("dotenv").config();

const jwt = require('jsonwebtoken');

const User = require("../models/user")

module.exports = {
    login: async (req, res) => {
        const userLogin = req.body

        try {
            const user = await User.findOne({email : userLogin.email})
            if (!user) throw new Error("invalid user")
    
            if (user.password !== userLogin.password) throw new Error("invalid user password") 
    
            const token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_KEY)
    
            res.status(200).json({
                message: "Login Successfully",
                userId: user._id,
                token,
              });
            
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    regis: async (req, res) => {
    }
}