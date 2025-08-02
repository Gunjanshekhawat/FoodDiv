import jwt from 'jsonwebtoken'
export const authMiddleWare=(req,res,next)=>{
     
    const {token} =req.headers;
    console.log('Incoming token:', token); // Debug line
    console.log('Incoming body:', req.body); //
    if(!token)
    {
             return res.json({success:false,message:"not authorized login again"})
    }
    try{
        const token_decode=jwt.verify(token,process.env.JWT_SECRET);
       if (!req.body) req.body = {};  // ✅ makes sure body exists
       req.body.userId = token_decode.id;

      
        next();

    }
    catch(error)
    {
          console.log(error);
          res.json({success:false,message:"false"})
    }
}
