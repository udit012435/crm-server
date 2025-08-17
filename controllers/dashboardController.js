import Department from "../models/Department.js";
import Employee from "../models/employee.js";
import Leave from "../models/Leave.js";
// import User from "../models/User.js";

const getSummary = async(req, res) => {
    try{
        const totalEmployees = await Employee.countDocuments();

        const totalDepartments = await Department.countDocuments();

        const employeeAppliedForLeave = await Leave.distinct('emplopyeeId');

        const totalLeaves = await Leave.countDocuments();

        const leaveStatus = await Leave.aggregate([
            {$group: {
                _id: "$status",
                count: {$sum: 1}
            }}
        ]);

        const leaveSummary = {
            total: totalLeaves,
            appliedFor: employeeAppliedForLeave.length,
            approved: leaveStatus.find(item => item._id === "Approved")?.count || 0,
            rejected: leaveStatus.find(item => item._id === "Rejected")?.count || 0,
            pending: leaveStatus.find(item => item._id === "Pending")?.count || 0,

        }
        return res.status(200).json({
            success: true,
            totalEmployees,
            totalDepartments,
            leaveSummary
        })

    }catch(error){
        return res.status(500).json({success: false, error: "dashboard summary fetching error"})
    }
}

export {getSummary};