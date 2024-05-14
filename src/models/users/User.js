const mongoose=require('mongoose');

const userScheme=new mongoose.Schema({
    email:String,
    password:String,
    name:String
});

const User=mongoose.model('users',userScheme);

module.exports=User;