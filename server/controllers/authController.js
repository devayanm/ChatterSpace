const User = require('../models/User');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

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
    });

    res.status(200).json({
    success: true,
    message: "Logged in successfully",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};

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
  console.error("❌ Signup error:", err);

  // Handle duplicate key errors (username or email already exists)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(400).json({
      success: false,
      message: `${field} already exists`
    });
  }

  // Handle validation errors
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map(val => val.message);
    return res.status(400).json({
      success: false,
      message: messages.join(", ")
    });
  }

  // Default: unknown server error
  res.status(500).json({ success: false, message: "Internal server error" });
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
const updateuser = async(req,res) => {
try {
    const  {uname, uusername, uemail} = req.body;
    const {id} = req.params;
    if(!(uname || uusername || uemail)){
        return res.status(400).json({success:false, message:"fill at least one of them!"});
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
        return res.status(404).json({success:false, message:"User not found!"});
    }
    res.status(200).json({success:true, message:"Details updated successfully", data:user});


} catch (error) {
  return  res.status(500).json({success:false, message:error.message});

}
};
// by Samay2006
// @desc    Get user details by ID
// @route   GET /user/:id
const getuserbyid = async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id).select("-password");
        if(!user){
        return res.status(404).json({success:false, message:"User not found!"});
    }
    res.status(200).json({success:true, message:"User details fetched successfully", data:user});

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,

        });
    }
};
// by Samay2006
// @desc Delete user
// @route DELETE /user/:id
const deleteuser = async (req, res) => {
try {
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id);
    
    if(!user){
        return res.status(404).json({
    success:false,
    message:"User not found!"
    });
    }
    
    res.status(200).json({
        success:true,
        message:"User Deleted successfully", 
        });
    
} catch (error) {
         return res.status(500).json({
            success:false,
            message:error.message,
});
}
};

// ⬅️ Updated forgotPassword function
// @desc Request password reset link
// @route POST /api/auth/forgotpassword
// @access public
const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            // Security best practice: return a generic success message even if the user is not found.
            return res.status(200).json({
                success: true,
                message: 'If a user with that email exists, a password reset link has been sent.'
            });
        }

        const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        // ⬅️ Use the most robust Nodemailer setup for Gmail
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false, // TLS is used, so secure is false
          requireTLS: true, // This enables STARTTLS
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          to: user.email,
          from: process.env.EMAIL_USER,
          subject: 'Password Reset',
          html: `<p>You requested a password reset. Click this link to reset your password:</p><p><a href="http://localhost:5173/resetpassword/${resetToken}">Reset Password Link</a></p>`,
        };

        await transporter.sendMail(mailOptions);
        
        console.log(`Password reset email sent to: ${email}`);

        res.status(200).json({
            success: true,
            message: 'If a user with that email exists, a password reset link has been sent.'
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error while sending email.' });
    }
};


module.exports = {
    signupUser,
    loginUser,
    logoutUser,
    updateuser,
    getuserbyid,
    deleteuser,
    forgotPassword,
};
