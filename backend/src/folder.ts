import express from 'express';
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
    try{

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
    try{

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
})