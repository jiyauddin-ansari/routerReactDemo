import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <header>
            <p>
                <a className="navbar-brand" href="#">Tata Steel</a>
            </p>
        </header>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink to='/' className="nav-link">Home <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/about'>About</NavLink>
      </li>
       <li className="nav-item">
        <NavLink className="nav-link" to='/location'>Location</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/product'>Product</NavLink>
      </li>
      
      </ul>
      <div>
        <NavLink style={{'color':'white'}} className="text-right nav-link" to='/Login'>Login</NavLink>
      </div>
      
      
    
  </div>
</nav>
    </>
  )
}

export default Navbar
