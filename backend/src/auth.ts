import express from 'express';
import { auth_validation } from './validation';
import jwt from 'jsonwebtoken';
const route=express.Router();
import prisma from './db';
import { error } from 'node:console';
if(!process.env.JWT_SECERT){
    throw error("Can,t access jwt password");
}
const jwt_pass=process.env.JWT_SECERT;
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
     const is_present=await prisma.user.findUnique({where:{email}});
     if(!is_present){
        return res.status(402).json({
            success:false,
            message:"User already present "
        })
     }
     const new_user=await prisma.user.create({
        data:{
            email:email,
            password:password
        },
        select:{
            email:true
        }
     })
     const token=jwt.sign(password,jwt_pass,{
        expiresIn:'1h'
     }) ;
     if(!token){
        return res.status(403).json({
            success:false,
            message:"Can,t generate the token"
        })
     }
     return res.status(200).json({
        success:true,
        message:"Signup done successfully",
        email:new_user,
        token:token
     })
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
    const is_present=await prisma.user.findUnique({where:{email}});
     if(!is_present){
        return res.status(402).json({
            success:false,
            message:"User not found! "
        })
     }
     const token=jwt.sign(password,jwt_pass,{
        expiresIn:'1h'
     }) ;
     if(!token){
        return res.status(403).json({
            success:false,
            message:"Can,t generate the token"
        })
     }
     return res.status(200).json({
        success:true,
        message:"Signup done successfully",
        token:token
     })

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
})