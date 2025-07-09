import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Location from './component/Location'
import About from './component/About'
import Footer from './component/Footer'
import PageNotFound from './component/PageNotFound'
import Login from './component/login'
import Product from './component/Product'


const App = () => {
  const [activeUser,setActiveUser]=useState('');
  useEffect(()=>{
    setActiveUser(localStorage.getItem('USER')); 
  },[])
  return (
    <div>
      <h2>AppComp:</h2>
      {/* <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/location'>Location</Link>
      </nav> */}
      <Navbar/>
      <br/><br/>
      <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </div>
      <Footer company="Tata Steel"/>
      
    </div>
  )
}

export default App
