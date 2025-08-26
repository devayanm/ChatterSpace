const User = require('../models/User');
const jwt = require('jsonwebtoken');
const crypto=require("crypto");
const {sendMail}=require("../config/emailConfig");
const { route } = require('../routes/authRoutes');

// Function to generate and send JWT token
const sendToken = (user, res) => {
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
        expiresIn: '7d',
    });

    res.cookie('token', token, {
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
// by Samay2006
// @desc Update user details (name, username, email)
// @route   PATCH /update/:id
const updateuser=async(req,res)=>{
try {
    const  {uname,uusername,uemail}=req.body;
    const {id}=req.params;
if(!(uname ||uusername||uemail)){
    return res.status(400).json({success:false,message:"fill at least one of them!"})
}

// Updating only the values that are provided
const updateFields = {};
if (uemail) updateFields.email = uemail;
if (uname) updateFields.name = uname;
if (uusername) updateFields.username = uusername;

const user = await User.findByIdAndUpdate(
    id,
    { $set: updateFields },
    { new: true }
).select("-password");

// if user not found
if(!user){
    return res.status(404).json({success:false,message:"User not found!"})
}
res.status(200).json({success:true,message:"Details updated successfully", data:user})


} catch (error) {
  return  res.status(500).json({success:false,message:error.message})

}
}
// by Samay2006
// @desc    Get user details by ID
// @route   GET /user/:id
const getuserbyid=async(req,res)=>{
    try {
        const {id}=req.params;
        const user=await User.findById(id).select("-password");
        if(!user){
        return res.status(404).json({success:false,message:"User not found!"})
}
res.status(200).json({success:true,message:"User details fetched successfully", data:user})

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,

        });
    }
}
// by Samay2006
// @desc Delete user
// @route DELETE /user/:id
const deleteuser=async (req,res) => {
try {
    const {id}=req.params;
    const user=await User.findByIdAndDelete(id)
    
    if(!user){
        return res.status(404).json({
    success:false,
    message:"User not found!"
    })
    }
    
    res.status(200).json({
        success:true,
        message:"User Deleted successfully", 
        });
    
} catch (error) {
         return res.status(500).json({
            success:false,
            message:error.message,
})
}
    
}

// by vivek724464
// @desc forgot password
// @routr /forgot-password

const forgotPassword=async(req,res)=>{
    try{
        const {email}=req.body;
        const user=await User.findOne({email:email});
        if (!user) return res.status(404).json({ success:false, message: "User not found" });

          //Generate reset token
        const resetToken = crypto.randomBytes(32).toString("hex");
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpire = Date.now() + 15 * 60 * 1000; 
        await user.save();

          // Reset URL
        const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;
        await sendMail(
            email,
            "Password Reset - ChatterSpace",
            `Click here to reset your password: ${resetUrl}`
        ) 
         return res.status(200).json({
            success: true,
            message: "Password reset link sent to your email"
        });
    }catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,
         })
    }
}

// by vivek724464
// @desc reset password
// @routr /reset-password/:token

const resetPassword = async (req, res) => {
    try{
        const {token}=req.params;
        const {password}=req.body;

        const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpire: { $gt: Date.now() }, 
    });

    if (!user) return res.status(400).json({ message: "Invalid or expired token" });

     // Update password
    user.password = password;
    user.resetPasswordToken = null;
    user.resetPasswordExpire = null;

    await user.save();
    await sendMail(
            user.email,
            "Password Reset confirmation - ChatterSpace",
            "Password reset successfully"
        ) 
    return res.status(200).json({ message: "Password reset successful" });
    


    }catch (error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}



module.exports = {
    signupUser,
    loginUser,
    logoutUser,
    updateuser,
    getuserbyid,
    deleteuser,
    forgotPassword,
    resetPassword
}