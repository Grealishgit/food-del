import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    name:{type:String,requuired:true},
    email:{type:String,requuired:true,unique:true},
    password:{type:String,requuired:true,},
    cartData:{type:Object,default:{}}
},{minimize:false})

const userModel=mongoose.models.user || mongoose.model("user",userSchema);
export default userModel;