import express from 'express';
const route=express.Router();


route.get("/files",async(req,res)=>{
    try{

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
})

route.post("/make",async(req,res)=>{
    try{

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
})

route.put("/rename",async(req,res)=>{
    try{

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
})

route.delete("/delete-file",async(req,res)=>{
    try{

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
})