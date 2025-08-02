import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoutes.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoutes.js'



const app=express()
const port=4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

connectDB()


app.use('/api/food',foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get('/',(req,res)=>{
    res.send("API WORKING")
})
app.listen(port,()=>{
    console.log(`server is listening at port:${port}`)
})
