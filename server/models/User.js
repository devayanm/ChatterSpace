const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please provide a name"],
        trim: true
    },
    username:{
        type: String,
        required: [true,"Please provide a username"],
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email'
        ]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: [8, "Password must be at least 8 characters long"],
        select: false 
    },
    resetPasswordToken: {
        type:String
    },
    resetPasswordExpire: {
        type:Date
    },
});

//Hashing password before saving
userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }catch(err){
        next(err);
    }
});

 //Method to compare passwords
userSchema.methods.comparePassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
