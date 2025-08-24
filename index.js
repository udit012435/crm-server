import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'
import departmentRouter from './routes/department.js'
import employeeRouter from './routes/employee.js'
import connectToDatabase from './db/db.js'
import leaveRouter from './routes/Leave.js'
import dashboardRouter from './routes/dashboard.js'
import settingRouter from './routes/Setting.js'

connectToDatabase()
const app = express()
app.use(cors(
    {
        // origin: "https://employees-iota.vercel.app",
        origin: "*",
        credentials: true
    }
))
app.use(express.json())
app.use(express.static('public/uploads'))
app.use('/api/auth', authRouter)
app.use('/api/department', departmentRouter)
app.use('/api/employee' , employeeRouter)
app.use('/api/leave', leaveRouter)
app.use('/api/setting', settingRouter)
app.use('/api/dashboard', dashboardRouter)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`)
})
// export default serverless(app);
