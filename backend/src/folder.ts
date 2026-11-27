import express from 'express';
import { put_folder_validation } from './validation';
import prisma from './db';
const router=express.Router();




router.post("/make-folder",async(require,res)=>{
    try{

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
})


router.put("/update-name",async(require,res)=>{
    const name_folder=put_folder_validation.safeParse(require.body);
    if(!name_folder){
        return res.status(404).json({
            success:false,
            message:"Please enter the name of folder"
        })
    }
    // const {name,existing_name}=name_folder.data;
    try{
        // const find_folder=await prisma.folder.findUnique({where:{existing_name}});
        
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
})


router.delete("/delete-folder",async(require,res)=>{
    try{

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
})


router.get("/inside-folder",async(require,res)=>{
    const id=require.body;
    if(!id){
        return res.status(404).json({
            success:false,
            message:"id not get"
        })
    }
    try{
        const get=await prisma.folder.findUnique({where:{id}})
        if(!get){
            return res.status(403).json({
                success:false,
                message:"Can,t get the folder"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Folder found successfully",
            folder:get
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
})