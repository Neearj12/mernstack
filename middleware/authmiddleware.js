import jwt from 'jsonwebtoken';

// Protected route middleware
export const requireSignIn = async (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
    next();
  } catch (error) {
    console.log(error);
  }
};
