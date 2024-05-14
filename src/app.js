const express=require('express');
const userRoute = require('./routes/users/userroutes');
require('../db/config');

const allroutes=express.Router();

allroutes.use('/users',userRoute);


module.exports=allroutes;