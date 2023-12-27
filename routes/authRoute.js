import express from "express";
import { registerController, loginController, testController } from '../controller/authController.js';
import { requireSignIn } 


const router = express.Router();

// Routing
// Register || Method POST
router.post('/register', registerController);

// Login || POST
router.post('/login', loginController);

// Test route
router.get('/test', requireSignIn, testController);

export default router;
