import express from 'express'
import personModel from '../models/PersonModel.js'

const personRouter =express.Router()

personRouter.get('/',async (req,res)=>{
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
personRouter.get('/:id',async(req,res)=>{
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
personRouter.get('/:worktype', async (req, res) => {
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
personRouter.post('/',async (req,res)=>{
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
personRouter.delete('/:id',async(req,res)=>{
    try {
        const response=await personModel.findByIdAndDelete({_id:req.params.id});
        res.json({success:true,message:"person deleted"})
    } catch (error) {
        res.json({success:false,message:"error in deleting"})
        console.log("error")
    }
})

personRouter.put('/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const updateBody=req.body;

        const response = await personModel.findByIdAndUpdate(id,updateBody,{
            runValidators:true,
            new:true
        })
        if(!response)   return res.status(404).json({success:false,message:"person not found"})
        res.status(200).json(response)
    
    } catch (error) {
        res.status(500).json({success:false,message:"error in updating"})
        console.log(error)
    }
})
export default personRouter