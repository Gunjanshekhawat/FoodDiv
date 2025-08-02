import foodModel from "../models/foodDel.js";
import fs from 'fs'


export const addFood = async (req, res) => {
  
  
    try {
      if (!req.file) {
        return res.status(400).json({ success: false, message: "Image file is required" });
      }
  
      const image_filename = req.file.filename;
  
      const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
      });
  
      await food.save();
      res.status(201).json({ success: true, message: "Food added successfully", data: food });
    } catch (error) {
      console.error("Error adding food:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }
  export const allFoodList=async (req,res)=>{
      try{
           const foods=await foodModel.find({})
           res.json({success:true,data:foods})
      }
      catch(error)
      {
          console.log(error);
          res.json({success:false,message:"error"})
      }
  }
  export const removeFood=async(req,res)=>{
       try{
            const food=await foodModel.findById(req.body.id)
            fs.unlink(`uploads/${food.image}`,()=>{

            })
            await foodModel.findByIdAndDelete(req.body.id)
            res.json({succes:true,message:"Food removed"})
       }
       catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})        

       }
  }
  