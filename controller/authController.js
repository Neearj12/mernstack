import { comparePassword, hashPassword } from "../helpers/authhelper.js";
import usermodel from "../models/usermodel.js";
import jwt from 'jsonwebtoken';

// Registration controller
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    // Validation
    if (!name || !email || !password || !phone || !address) {
      return res.status(400).send({
        success: false,
        message: 'All fields are required',
      });
    }

    // Check if the user already exists
    const existingUser = await usermodel.findOne({ email });

    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: 'Already registered, please login',
      });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Save the user
    const user = await new usermodel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: 'User registered successfully',
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: 'Error in registration',
      error,
    });
  }
};

// Login controller
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

    // Check if the user exists
    const user = await usermodel.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'Email not registered',
      });
    }

    // Check password match
    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.status(401).send({
        success: false,
        message: 'Invalid password',
      });
    }

    // Generate JWT token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.status(200).send({
      success: true,
      message: 'Login successful',
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: 'Error in login',
      error,
    });
  }
};

// Test controller
export const testController = (req, res) => {
  res.send('protected route');
};
