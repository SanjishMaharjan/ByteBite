import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT,(err)=>{
    console.log(`Server is running on port ${PORT}`);
    if(err) console.log(err);
})

app.get("/",(req,res)=>{
    res.send("Hello World");
})
