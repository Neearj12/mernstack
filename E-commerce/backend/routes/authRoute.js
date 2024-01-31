// Import necessary modules
import express from "express";
import { registerController, loginController, forgotPasswordController, testController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

// ... rest of your code



// Create a router object
const router = express.Router();

// Define the registration route using POST method
router.post('/register', registerController);
//login 
router.post('/login',loginController)
//Forgot password
router.post('/forgot-password', forgotPasswordController)
//test Routes
router.get('/test',requireSignIn,isAdmin, testController)

//Protected User  Route
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
})
//Protected  Admin Route
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
})

// Export the router to use in other parts of your application
export default router;
