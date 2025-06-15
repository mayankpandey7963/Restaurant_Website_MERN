import mongoose from 'mongoose';
import cors from 'cors'
import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
const app = express();

import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';


const PORT = process.env.PORT || 5001;


//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.use('/auth', authRoutes);
// app.use('/search', searchRoutes);
app.use('/products', productRoutes);


mongoose.connect(process.env.MONGO_URL)
.then(() =>{
    console.log("MongoDB connected")
    console.log("Connected DB name:", mongoose.connection.name);

    app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
})
.catch((err)=>{
    console.error("Message", err);
})