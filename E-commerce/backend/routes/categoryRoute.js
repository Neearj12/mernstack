import express from 'express';
import { createCategoryController, updateCategoryController } from '../controllers/categoryController.js';
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';

const router = express.Router();

// routes
router.post('/create-category',
 requireSignIn,
  isAdmin, 
  createCategoryController);

  //update category
  router.put('/update-category/:id',
  requireSignIn,
  isAdmin,
  updateCategoryController)
export default router;
