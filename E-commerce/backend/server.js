import express  from "express";
import colors from 'colors'
import morgan from "morgan";
import authRoute from './routes/authRoute.js'
import categoryRoute  from './routes/categoryRoute.js'
import { configDotenv } from "dotenv";
import connectDb from "./config/db.js";
import cors from 'cors'

//config env
configDotenv();


//database config
connectDb();


//rest object
const app=express()

//middleware
app.use(morgan('dev'))
app.use(express.json())

//routes
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/category',categoryRoute)

//rest api
app.get('/',(req,res)=>{
    res.send('<h1>welcome to ecommerce app</h1>')
})

//PORT
const PORT=process.env.PORT||8080


//run listen
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`.bgCyan.white);
})