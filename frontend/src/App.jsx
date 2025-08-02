import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Placeorder from './pages/Placeorder/Placeorder'
import { Routes,Route } from 'react-router-dom'
import LoginpopUp from './components/loginpopUp/loginpopUp'
import Verify from './pages/verify/verify'
import Order from './pages/Orders/Oders'
const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
     {showLogin && <LoginpopUp setShowLogin={setShowLogin} />}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeorder' element={<Placeorder/>}/>
        <Route path='/verify'   element={<Verify/>}/>
        <Route path='/order'  element={<Order/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App