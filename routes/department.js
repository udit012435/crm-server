import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { addDepartment, getDepartments, editDepartment, updateDepartment, deleteDepartment } from "../controllers/departmentController.js"; // Corrected import

const router = express.Router();

// Define the route
router.get("/", authMiddleware, getDepartments);
router.get("/:id", authMiddleware, editDepartment);
router.put("/:id", authMiddleware, updateDepartment);
router.post("/add", authMiddleware, addDepartment);
router.delete("/:id", authMiddleware, deleteDepartment);

export default router;
