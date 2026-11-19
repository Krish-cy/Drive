import express from 'express';
import { auth_validation } from './validation';
const route=express.Router();


route.post("/signup",async(req,res)=>{
    const valid=auth_validation.safeParse(req.body);
    if(!valid.success){
        return res.status(403).json({
            success:false,
            message:"Please check the inputs"
        })
    }
    const {email,password}=valid.data;
    try{
      
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
})

route.post("/signin",async(req,res)=>{
    const valid=auth_validation.safeParse(req.body);
    if(!valid.success){
        return res.status(403).json({
            success:false,
            message:"Please check the inputs"
        })
    }
    const {email,password}=valid.data;
    try{

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
})