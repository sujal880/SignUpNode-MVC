const express=require('express');
const allroutes = require('./src/app');

require('./db/config')

const app=express();
app.use(express.json());

app.use(allroutes);
app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Welcome To Sujal's Api"
    })
})
app.listen(5000, ()=>{
    console.log(`Server is Running on Port ${5000}`);
})