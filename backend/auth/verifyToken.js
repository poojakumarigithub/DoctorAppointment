import jwt from 'jsonwebtoken';
import Doctor from '../models/DoctorSchema.js';
import User from '../models/UserSchema.js';

// Authenticate user by verifying JWT
export const authenticate = async (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken || !authToken.startsWith('Bearer')) {
    return res.status(401).json({ success: false, message: 'No token, authorization denied' });
  }

  try {
    const token = authToken.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = decoded.id;
    req.role = decoded.role;

    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: 'Token expired' });
    }
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

// Restrict route access by role
export const restrict = (roles) => {
  return async (req, res, next) => {
    try {
      let user = null;

      if (req.role === 'patient') {
        user = await User.findById(req.userId);
      } else if (req.role === 'doctor') {
        user = await Doctor.findById(req.userId);
      }

      if (!user || !roles.includes(user.role)) {
        return res.status(403).json({ success: false, message: 'You are not authorized' });
      }

      next();
    } catch (error) {
      res.status(500).json({ success: false, message: 'Authorization check failed' });
    }
  };
};
