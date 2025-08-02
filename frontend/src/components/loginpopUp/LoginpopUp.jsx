import React, { useContext, useState } from 'react'
import './LoginpopUp.css'
import { assets } from '../../assets/assets'
import {StoreContext} from '../../context/StoreContext'
import axios from 'axios'
const LoginpopUp = ({setShowLogin}) => {
    const [currState ,setCurrState]=useState("Login")
    const [data,setData]=useState({
      name:"",
      email:"",
      password:""

    })
    const {url,Settoken}=useContext(StoreContext)
    
    const onChangeHandler=(event)=>{
      const name=event.target.name
      const value=event.target.value
      setData(data=>({...data,[name]:value}))
    }
   
    
   
  const onLogin = async (event) => {
  event.preventDefault();
  let newurl = url;

  if (currState === "Login") {
    newurl += "/api/user/login";
  } else {
    newurl += "/api/user/register";
  }

  try {
    const response = await axios.post(newurl, data);

    if (response.data.success) {
      Settoken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  } catch (error) {
    // Log the full error for debugging
    console.log("Axios error:", error);
   
  }
};

  return (
    
    <div className='login-popup'>
      <form className='login-popup-container' onSubmit={onLogin}>
             <div  className='login-popup-title'>
                <h2>{currState}</h2>
                <img  onClick={()=>{setShowLogin(false)}}   src={assets.cross_icon} alt="" />
             </div>
             <div className="login-popup-input">
                {currState==="Login"?<></>: <input type="text" name='name' value={data.name} onChange={onChangeHandler} placeholder='your name' required />}
               
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required  />
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Your password' required  />
             </div>
             <button>{currState==="Sign up"?"Create account":"Login"}</button>
             <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terma of use & privacy policy</p>
             </div>
             {currState==="Login"? <p onClick={()=>{setCurrState("Sign up")}}>Create a new account? <span>Click here</span></p>: <p onClick={()=>{setCurrState("Login")}}>Already have an account?<span>Login here</span></p>}
            
            
      </form>
    </div>
  )
}

export default LoginpopUp