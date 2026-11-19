import express from 'express';
import { error } from 'node:console';
const app=express();
app.use(express.json());
if(!process.env.PORT){
    throw error("Can not Access the server");
}

const PORT=process.env.PORT;

app.use("/auth");
app.use("/files");
app.use("/folders");


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})