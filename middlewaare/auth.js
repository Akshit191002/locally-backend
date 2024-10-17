const jwt=require("jsonwebtoken")
require("dotenv").config();

const auth=(req,res,next)=>{

    //verify token
    try{
         //extract jwt token
          const token=req.body.token;
     
          if(!token){
             res.json({
                 success:false,
                 message:"token missing"
             })
          }
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
    

}

module.exports = auth;


