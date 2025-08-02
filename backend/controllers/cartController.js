import userModel from '../models/usermodel.js'
const addTocart=async (req,res)=>{
      try{
               let userData=await userModel.findOne({_id:req.body.userId});
               let cartData=await userData.cartData
               if(!cartData[req.body.itemId])
               {
                     cartData[req.body.itemId]=1;
               }
               else{
                    cartData[req.body.itemId]=cartData[req.body.itemId]+1;
               }
               console.log(cartData);
              
               await userModel.findByIdAndUpdate(req.body.userId,{cartData})
               
               return res.json({success:true,message:"Added to cart"})
       }
       catch(error)
       {
                 console.log(error);
                 return res.json({success:false,message:"error"})
                 
       }
}
const removeFromCart=async (req,res)=>{
     try{
          let userData=await userModel.findById(req.body.userId);
          let cartData=userData.cartData;
          if(cartData[req.body.itemId]>0)
          {
            cartData[req.body.itemId]-=1;
          }
          await userModel.findByIdAndUpdate(req.body.userId,{cartData})
          res.json({success:true,message:"Removed Successfully"})

     }
     catch(error)
     {
                 console.log(error);
                 return res.json({success:false,message:"error"})
     }
}
const getcart=async (req,res)=>{
      try{
            let userData=await userModel.findById(req.body.userId);
            let cartData=userData.cartData;
            return res.json({success:true,cartData})

      }catch(error)
      {
              console.log(error);
              return res.json({success:false,message:"error"})
      }
}
export {addTocart,removeFromCart,getcart}