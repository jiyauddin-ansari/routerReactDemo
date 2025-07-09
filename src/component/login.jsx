import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // const navigate=useNavigate();
  const staticData={'email':'tata@gmail.com','pass1':'tata@123'};
  const [loginData,setLoginData]=useState({});
  const navigate=useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('USER')){
      navigate('/product')
    }
  },[]);
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setLoginData({...loginData,[name]:value});
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(loginData);
    if(loginData.email==staticData.email && loginData.pass1==staticData.pass1){
      alert('login Successfully');
      localStorage.setItem('USER',loginData.email);
      navigate('/product');
    }else{
      alert('Invalid useremail and password')
    }
  }
  return (
    <>
      <div className='container'>
        <header className='modal-header'>
          <h4>LOGIN</h4>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            Email : <input type="text" name='email' onChange={handleChange} required className='form-control'/>
          </div>
          <div className="form-group">
            Password : <input type="password" name="pass1" onChange={handleChange} required className='form-control'/>
          </div>
          <div className="form-group">
            <button className='btn btn-sm btn-outline-dark' >Login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
