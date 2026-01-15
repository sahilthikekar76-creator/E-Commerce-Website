const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const connectDB=require('./config/db');
const userRoute=require('./routes/userRoute');
const productRoute=require('./routes/productRoute');
const cartRoute=require('./routes/cartRoute');
const app=express();
app.use(express.json());
app.use(cors());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
const PORT=process.env.PORT ||3000;

connectDB();

//Api routes
app.use('/api/users',userRoute);
app.use('/api/products',productRoute);
app.use('/api/cart',cartRoute);
app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
})