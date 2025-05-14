import http from 'http'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express';

import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'
import searchRoutes from './routes/searchRoutes.js';


const PORT = process.env.PORT || 3000;

dotenv.config();
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/search', searchRoutes);



http.createServer(app).listen(PORT, (err) =>{
    if(err){
       console.error(err)
    }else{
        console.log(`Server started at http://127.0.0.1:${PORT}`);
    }
})