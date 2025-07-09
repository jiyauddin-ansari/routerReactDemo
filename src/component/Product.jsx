import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Product = () => {
  const [activeUser,setActiveUser]=useState('');
  const navigate=useNavigate();
  useEffect(()=>{
    const User=localStorage.getItem('USER');
    if(!User){
      alert('Login to continue')
      navigate('/login');
    }else{
      setActiveUser(User);
    }
  },[]);

// const navigate=useNavigate();
const logout=()=>{
  localStorage.clear();
  alert('Logged Out Successfully');
  navigate('/login');
  // window.location.href='/login';
}
  return (
    <div>
      <h4>This is product page</h4>
      <div style={{'float':'right'}}>
        {activeUser && <div>Welcme {activeUser}
                       <button onClick={logout}>Logout</button>
                       </div>}
      </div>
      <NavLink to='/'>Back To Main</NavLink>
    </div>
  )
}

export default Product
