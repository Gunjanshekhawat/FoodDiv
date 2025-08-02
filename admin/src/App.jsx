import React from 'react'
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar/Navbar'
import  Sidebar from './components/sidebar/Sidebar'
import {Route,Routes} from 'react-router-dom'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'




import Orders from './pages/Orders/Orders.jsx'
const App = () => {
  const url="http://localhost:4000"
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
      <Sidebar/>
      <Routes>
        <Route  path='/add' element={<Add  url={url}/>}></Route>
        <Route  path='/list' element={<List url={url}/>}></Route>
        <Route  path='/order' element={<Orders url={url}/>}></Route>
      
      </Routes>
      </div>
    </div>
  )
}

export default App