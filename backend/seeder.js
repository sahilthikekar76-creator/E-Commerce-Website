const mongoose=require('mongoose');
const dotenv=require('dotenv');
const Product=require('./model/productModel')
const User=require('./model/userModel');
const cart=require('./model/cartModel');
const products=require('./data/products');
dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const seedData=async()=>{
    try{
        //clear existing dat
        await Product.deleteMany();
        await User.deleteMany();
        await cart.deleteMany();
        //create a default admin user
        const createdUser=await User.create({
            name:"Admin User",
            email:"admin@example.com",
            password:"123456",
            role:"admin",
        });

        //assign default user id to each product
        const userID=createdUser._id;

        const sampleProducts=products.map((product)=>{
            return{...product,user:userID};
        });
        //Insert the products into database
        await Product.insertMany(sampleProducts);

        console.log("Products data seeded successfully");
        process.exit();
    }catch(err){
        console.error("error in seeding the data",err);
        process.exit(1);
    }
};

seedData();