import express from 'express'
import menuModel from '../models/Menu.js';

const menuRouter=express.Router();

menuRouter.get('/',async(req,res)=>{
    try {
        const response=await menuModel.find();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({success:false,message:"Internal error"})
        console.log(error)
    }
})

menuRouter.post('/',async(req,res)=>{
    try {
        const Nmenu=req.body;
        const newMenu=new menuModel(Nmenu);
        const response=await newMenu.save();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({success:false,message:"Error"})
        console.log(error)
    }
})

export default menuRouter