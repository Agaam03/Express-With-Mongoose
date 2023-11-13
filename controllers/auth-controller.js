require("dotenv").config();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require("../models/user")

module.exports = {
    login: async (req, res) => {
        const { email, password } = req.body

        try {
            const user = await User.findOne({ email })

            if (user){
                const passwordMatch = await bcrypt.compare(password, user.password);

                if (passwordMatch){
                    const token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_KEY)
                    res.status(200).json({
                        message: "Login Successfully",
                        name: user.name,
                        userId: user._id,
                        token,
                      });
                } else {
                    res.status(401).json({ error: 'Password salah' });
                }
            } else {
                res.status(401).json({ error: "User Tidak Ditemukan" })
            }

            // if (!user) throw new Error("invalid user")
    
            // if (user.password !== userLogin.password) throw new Error("invalid user password") 
    
            // const token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_KEY)
    
            // res.status(200).json({
            //     message: "Login Successfully",
            //     userId: user._id,
            //     token,
            //   });
            
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}