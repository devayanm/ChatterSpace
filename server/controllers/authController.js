const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Function to generate and send JWT token
const sendToken = (user, res) => {
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
        expiresIn: '7d',
    });

    res.cookie('toke', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', 
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    res.status(200).json({
    success: true,
    message: "Logged in successfully",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
}

// @desc Sign up 
// @route POST /api/auth/signup
// @access public
const signupUser = async (req, res) => {
    try{
        const {name, username, email, password} = req.body;

        if(!name || !username || !email || !password){
            return res.status(400).json({error: "Please provide all fields"});
        }

        if(password.length < 8){
            return res.status(400).json({error: "Password must be at least 8 characters long"});
        }

        //check if email already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        const user = await User.create({
            name,
            username,
            email,
            password
        });

        sendToken(user, res);

    }catch(err){
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// @desc Login user
// @route POST /api/auth/login
// @access public 
const loginUser = async (req, res) => {
    try {
        //email/username and password
        const { identifier, password } = req.body; 

        if (!identifier || !password) {
            return res.status(400).json({ success: false, error: "Please provide all fields" });
        }

        // Find by email OR username
        const user = await User.findOne({
            $or: [{ email: identifier }, { username: identifier }]
        }).select("+password");

        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        // Check for password match
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        sendToken(user, res);
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
};


// @desc Logout
// @route POST /api/auth/logout
// @access public 
const logoutUser = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ success: true, message: "Logged out successfully" });
};

module.exports = {
    signupUser,
    loginUser,
    logoutUser
}