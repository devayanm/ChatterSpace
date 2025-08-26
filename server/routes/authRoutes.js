const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
router.post('/signup', authController.signupUser);
router.post('/login', authController.loginUser);    
router.get('/logout', authController.logoutUser);

// by vivek724464
// @route POST /forgot-password
// @route POST /reset-password/:token
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password/:token", authController.resetPassword);

// by Samay2006
// @route   PATCH /user/:id
router.get("/user/:id",authController.getuserbyid);
router.patch('/update/:id',authController.updateuser);
router.delete("/delete/:id",authController.deleteuser);

module.exports = router;