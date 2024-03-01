// authMiddleware.js
import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {

  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, "RANDOM-TOKEN");
    const user = decodedToken;
    req.user = user;
    next();
  } catch (error) {
    console.error('Authentication error:', error); // Log the error
    res.status(401).json({
      error: 'Authentication failed', // Send a generic error message
    });
  }
};

export default authMiddleware;
