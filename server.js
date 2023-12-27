import express from "express"
import colors  from "colors"
import dotenv from 'dotenv'
import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoutes from './routes/authRoute.js'

// configure env
dotenv.config()
// database config
connectDB()
//rest object
const app=express()
// middleware
app.use(morgan('dev'))
app.use(express.json())

//routes
app.use('/api/v1/auth',authRoutes)
//rest api
app.get('/',(req,res)=>{
res.send({
    message:"Welcome to e commerce mern  app"
})
})

//port
const PORT=process.env.PORT||8000;
//run listen
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`.bgCyan.white);
})