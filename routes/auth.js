import express from 'express' 
import {login, verify} from '../controllers/authController.js'
import authMiddleware from '../middleware/authMiddleware.js'
import { loginRateLimiter } from '../middleware/rateLimiter.js'
// import { verify } from 'jsonwebtoken'

const router = express.Router()

router.post('/login', loginRateLimiter,login)
router.get('/verify', authMiddleware, verify)

export default router;