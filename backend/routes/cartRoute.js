import express from 'express'
import { addTocart,removeFromCart,getcart } from '../controllers/cartController.js'
import { authMiddleWare } from '../middlewares/auth.js'

const cartRouter=express.Router()
cartRouter.post("/add",authMiddleWare,addTocart)
cartRouter.post("/remove",authMiddleWare,removeFromCart)
cartRouter.post("/get",authMiddleWare,getcart)

export default cartRouter;