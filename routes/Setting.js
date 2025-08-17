import express from 'express';
import authMiddleware from "../middleware/authMiddleware.js";
// import { addLeave, getLeave } from '../controllers/leaveController.js';
import { changePassword } from '../controllers/settingController.js';

const router = express.Router()

router.put('/change-password', authMiddleware, changePassword)
// router.get('/:id', authMiddleware, getLeave)

export default router