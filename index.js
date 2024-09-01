// const str='{"name":"papu","age":20,"city":"mysuru"}';
// console.log(typeof str)
// console.log(str)


// const jsonObj=JSON.parse(str);
// console.log(typeof jsonObj)
// console.log(jsonObj);

// const jsonToStr=JSON.stringify(jsonObj);
// console.log(typeof jsonToStr)
// console.log(jsonToStr)

import express from 'express'
import db from './db.js'
import bodyParser from 'body-parser';
import personModel from './models/PersonModel.js'
import menuModel from './models/Menu.js';
import menuRouter from './router/menurouter.js';
import personRouter from './router/personrouter.js';
import dotenv from 'dotenv';
dotenv.config();

const app=express();
app.use(bodyParser.json())

/*
//get method
app.get('/api/person',async (req,res)=>{
    try {

        if(req.query.name){
            const na=req.query.name;
            const response=await personModel.find({name:na});
            console.log("query parameter")
            res.status(200).json(response);

        }
     else{ const response= await personModel.find();
      res.status(200).json(response);
      console.log("data list")
     }
    } catch (error) {
        res.status(500).send("error")
        console.log("no data");
    }
   
})
//get single
app.get('/api/person/:id',async(req,res)=>{
    try {
        const response=await personModel.findById({ _id: req.params.id });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({success:false,message:"invalid"})
        console.log(error)
    }
})

//query parameter
/*
app.get('/api/person',async(req,res)=>{
    try {
     const na=req.query.name;
       const response=await personModel.find({name:na});
       console.log("query parameter")
       res.status(200).json(response);
    } catch (error) {
        res.status(500).json({success:false,message:"error"});
        console.log(error)
    }
})*/
// path meter
/*
app.get('/api/person/:worktype', async (req, res) => {
    try {
        const workType = req.params.worktype;
        const validWorkTypes = ["cook", "manager"];

        if (validWorkTypes.includes(workType)) {
            const response = await personModel.find({ work: workType });
            res.status(200).json(response);
        } else {
            res.status(404).json({ success: false, message: "Invalid work type" });
        }

    } catch (error) {
        res.status(500).json({ success: false, message: "Server error, please try again later" });
    }
});
//post method
app.post('/api/person',async (req,res)=>{
    try {
        const pres=req.body;

        const newPerson=new personModel(pres);
        const response=await newPerson.save()
        res.status(200).send(response)
        console.log("saved data succesfully")
    
    } catch (error) {
        console.log("INTERNAL server error")
        res.status(500).send("error")
    }
})
//delete
app.delete('/api/person/:id',async(req,res)=>{
    try {
        const response=await personModel.findByIdAndDelete({_id:req.params.id});
        res.json({success:true,message:"person deleted"})
    } catch (error) {
        res.json({success:false,message:"error in deleting"})
        console.log("error")
    }
})
*/
//--------------------------------menu---------------------
/*
app.get('/api/menu',async(req,res)=>{
    try {
        const response=await menuModel.find();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({success:false,message:"Internal error"})
    }
})
app.post('/api/menu',async(req,res)=>{
    try {
        const Nmenu=req.body;
        const newMenu=new menuModel(Nmenu);
        const response=await newMenu.save();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({success:false,message:"Error"})
    }
})
*/
app.use('/api/person',personRouter)
app.use('/api/menu',menuRouter);

app.listen(8000,()=>{
    console.log("server started")
})