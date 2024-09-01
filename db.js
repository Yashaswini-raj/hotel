import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();
//const URI='mongodb://localhost:27017/hotels'
const URI=process.env.mongoURI

mongoose.connect(URI,{})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("connected to db....")
})

db.on('error',()=>{
    console.log("error occured")
})

db.on('disconnected',()=>{
    console.log("disconnected")
})
export default db;