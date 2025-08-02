import express from 'express'
import { addFood, allFoodList,removeFood} from '../controllers/foodControllers.js'
import upload from '../middlewares/upload.js';
const foodRouter =express.Router()
foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.get("/list",allFoodList)
foodRouter.post("/remove",removeFood)   


export default foodRouter;