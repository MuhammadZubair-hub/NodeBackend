import mongoose, { Mongoose } from "mongoose";

const admin_credentials = new mongoose.Schema({
 username :{
    type:String,
    
 },
  password :{
    type:String,
    
 }
})

export const Admin = mongoose.model('Admin',admin_credentials);