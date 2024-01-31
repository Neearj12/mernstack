import { comparePassword, hashPassword } from '../helper/authHelper.js';
import userModel from '../models/usermodel.js';
import jwt from 'jsonwebtoken';


// Registration Controller
  export const  registerController = async (req, res) => {
    try {
      const { name, email, password, phone, address, answer } = req.body;
  
      // Validation
      if (!name || !email || !password || !phone || !address || !answer) {
        return res.status(400).send({ message: 'All fields are required' });
      }
  
      // Check existing user
      const existingUser = await userModel.findOne({ email });
  
      // Existing user
      if (existingUser) {
        return res.status(200).send({
          success: false,
          message: 'Already registered. Please login.',
        });
      }
  
      // Register user
      const hashedPassword = await hashPassword(password);
      const user = await userModel.create({
        name,
        email,
        password: hashedPassword,
        phone,
        address,
        answer,
      });
  
      res.status(201).send({
        success: true,
        message: 'User registered successfully',
        user,
      });
    } catch (error) {
      console.error('Error in registration:', error);
      res.status(500).send({
        success: false,
        message: 'Internal Server Error',
      });
    }
  };
  

  
  // Login Controller
  export const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Validation
      if (!email || !password) {
        return res.status(400).send({
          success: false,
          message: 'Invalid email or password',
        });
      }
  
      // Check user
      const user = await userModel.findOne({ email });
  
      if (!user) {
        return res.status(404).send({
          success: false,
          message: 'Invalid email or password',
        });
      }
  
      const match = await comparePassword(password, user.password);
  
      if (!match) {
        return res.status(200).send({
          success: false,
          message: 'Invalid email or password',
        });
      }
  
      // Generate token
      const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  
      res.status(200).send({
        success: true,
        message: 'Login successful',
        user: {
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          role:user.role,
        },
        token,
      });
    } catch (error) {
      console.error('Error in login:', error);
      res.status(500).send({
        success: false,
        message: 'Internal Server Error',
      });
    }
  };
  
  // Forgot Password Controller
 // ...
 export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    console.log('Received data:', { email, answer, newPassword });

    // Validation
    if (!email || !answer || !newPassword) {
      console.log('Validation failed: All fields are required');
      return res.status(400).send({ success: false, message: 'All fields are required' });
    }

    // Check user
    const user = await userModel.findOne({ email, answer });

    // Validation
    if (!user) {
      console.log('User not found or invalid answer');
      return res.status(404).send({ success: false, message: 'User not found or invalid answer' });
    }

    // Update password
    const hashedPassword = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashedPassword });

    console.log('Password reset successfully');
    res.status(200).send({ success: true, message: 'Password reset successfully' });
  } catch (error) {
    console.error('Error in forgot password:', error);
    res.status(500).send({ success: false, message: 'Internal Server Error' });
  }
};

  
  // Test Controller
  export const testController = (req, res) => {
    res.send('Protected route');
  };
  