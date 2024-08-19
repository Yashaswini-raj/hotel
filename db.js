import mongoose from 'mongoose'

//const URI='mongodb://localhost:27017/hotels'
const URI='mongodb+srv://yashaswiniraj:gtvilQ04Lh4dqmed@cluster0.owhytft.mongodb.net/hotels'

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