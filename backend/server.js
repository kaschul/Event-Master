//k: changed import statements for type:module
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

const app = express()
dotenv.config()
connectDB()

app.use('/api/products', productRoutes)


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port ${PORT}`));