const User = require("../../models/users/User");


const userdata=async(req,res)=>{
    const response=await User.find();
    res.status(200).json({
        message:"Data Founded",
        data:response
    });
}


module.exports=userdata;