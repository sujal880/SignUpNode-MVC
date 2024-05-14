const express=require('express');
const userRegister = require('../../controllers/users/registeruser');
const getdata=require('../../controllers/users/getuser');

const userRoute=express.Router();
const readdata=express.Router();

userRoute.post('/signup',userRegister);
userRoute.get('/getdata',getdata);


module.exports=userRoute;