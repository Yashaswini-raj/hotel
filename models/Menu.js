import mongoose from "mongoose";
import { type } from "os";

const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String
    },
    is_drink:{
        type:Boolean,
        enum:["spicy","sweet","sour"]
    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        defalut:0
    }
})

const menuModel=mongoose.model("menu",menuSchema);
export default menuModel;