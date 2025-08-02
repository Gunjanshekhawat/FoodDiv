/* eslint-disable no-unused-vars */
import { createContext, useEffect } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";
import axios from 'axios'
 export const StoreContext=createContext()
 
  const StoreContextProvider=(props)=>{
        const [cartItems,setcartItems]=useState({})
        const url="http://localhost:4000"
        const [token,Settoken]=useState("")
        const [food_list,setFoodList]=useState([])
  const addToCart=async (itemId)=>{
          if(!cartItems[itemId])
          {
              setcartItems((prev)=>({
                ...prev,[itemId]:1
          }) )
          }
          else{
            setcartItems((prev)=>({
              ...prev,[itemId]:1+prev[itemId]
            }))
          }
          if(token)
          {
                 await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
          }
  }
  const getTotalCartAmount=()=>{
     let totalAmount=0;
     for(const item in cartItems)
     {
           if(cartItems[item]>0)
           {
            let itemInfo=food_list.find((product)=>product._id===item);
            totalAmount+=itemInfo.price*cartItems[item];
           }

           
     }
     return totalAmount;
  }
  const removeFromCart=async (itemId)=>{
       setcartItems((prev)=>({
            ...prev,[itemId]:prev[itemId]-1
       }))
       if(token)
       {
          await axios.post(url+"/api/cart/remove",{itemId},{headers:token})
       }
  }
  useEffect(()=>{
       
       async function loadData()
       {
         await fetchFoodList();
         if(localStorage.getItem("token"))
         {
             Settoken(localStorage.getItem("token"));
             await loadCartData(localStorage.getItem("token"))
         }
        
       }
        loadData();
  },[])
    const contextvalue={
            food_list,cartItems,setcartItems,addToCart,removeFromCart,getTotalCartAmount,url,token,Settoken
    }
    const fetchFoodList=async ()=>{
          const response=await axios.get(url+"/api/food/list")
          setFoodList(response.data.data)

    }
    const loadCartData=async (token)=>{
      const response=await axios.post(url+"/api/cart/get",{},{headers:{token}})
      setcartItems(response.data.cartData);
    }
    return (
       <StoreContext.Provider value={contextvalue}>
        {props.children}
       </StoreContext.Provider>
    )
    
}
export default StoreContextProvider

