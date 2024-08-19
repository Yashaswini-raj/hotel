import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  //feilds
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    enum:["chef","manager","waiter","cook"],
    required: true,
  },
  mobile:{
    type:Number,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
    },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
});

const personModel = mongoose.model("perrson", personSchema);
export default personModel
