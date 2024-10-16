const jwt=require("jsonwebtoken")
require("dotenv").config();

exports.auth=(req,res,next)=>{
try{

    //extract jwt token
     const token=req.body.token;

     if(!token){
        res.json({
            success:false,
            message:"token missing"
        })
     }

     //verify token
     try{
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        console.log(decode);

        req.user=decode;

     }catch(error){
        res.json({
            success:false,
            message:"token invalid"
        })

     }
     next();

    
}catch(error){
    res.json({
        success:false,
        message:"some thing went wrong"
    })
    next();

    
}
}


