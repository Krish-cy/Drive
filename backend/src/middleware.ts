import type { Request,Response,NextFunction } from "express";
import jwt, { type JwtPayload } from 'jsonwebtoken';
if(!process.env.JWT_SECERT){
    throw error("Please check the JWt_PAYLOAD")
}
const jwt_pass=process.env.JWT_SECERT;

import { error } from "node:console";

export function middleware(req:Request,res:Response,next:NextFunction){
    const val=req.body;
    if(!val.success){
        return res.status(402).json({
            success:false,
            message:"Internal Server Error"
        })
    }
    //barere
    try{
        const decode=jwt.verify(val,jwt_pass) as JwtPayload;
        if(!decode){
            return res.status(404).json({
                success:false,
                message:"Please check the password"
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}