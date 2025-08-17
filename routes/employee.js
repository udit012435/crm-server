import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { addEmployee, upload, getEmployees, getEmployee, updateEmployee} from "../controllers/employeeController.js"; // Corrected import
import Employee from "../models/employee.js";

const router = express.Router();

// Define the route
router.get("/", authMiddleware, getEmployees);
router.post("/add", authMiddleware, upload.single("image"), addEmployee);
router.get("/:id", authMiddleware, getEmployee);
router.put("/:id", authMiddleware, updateEmployee);
// router.delete("/:id", authMiddleware, deleteDepartment);

export default router;
