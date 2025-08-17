// middleware/rateLimiter.js
import rateLimit from 'express-rate-limit';

export const loginRateLimiter = rateLimit({
  windowMs: 0.5 * 60 * 1000, // 30 sec (min * sec * mSec)
  max: 3, // Limit to 3 login attempts per IP
  message: {
    success: false,
    error: 'Too many login attempts. Please try again after 30 sec.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});