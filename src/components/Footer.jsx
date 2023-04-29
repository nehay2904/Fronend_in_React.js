import React from 'react'

import Logo from '../download.png'
import Home_logo from '.././Images/Bloodten.jpg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
   <div className="con">
   <div className="footer">
   <div className="foot_sec">
        <h6 style={{color:"white", marginBottom:20}}>"Donate blood and save a life"</h6>
    </div>
    <div className="foot_sec">
       
        <a href="/"> <h6 style={{color:"white", marginBottom:20}}>Home</h6></a>
    </div>
    <div className="foot_sec">
   
    <Link to='about'> <h6 style={{color:"white", marginBottom:20}}>About</h6></Link>
    </div>
    <div className="foot_sec">
    <a href=""> <h6 style={{color:"white", marginBottom:20}}>Privacy policy</h6></a>
       
        
    </div>
    <div className="foot_sec">
    <Link to='/policy'><h6 style={{color:"white", marginBottom:20}}>Terms and conditions</h6></Link>
       
        
    </div>
    <div className="foot_sec">
    <img src={Logo} style={{width:120, height:120}} className='logo_image' alt="" srcset="" />
    
    </div>
   </div>
   <div>
    <h6 style={{color:"whitesmoke"}}>@copyrights reserved</h6>
   </div>
   </div>
  )
}

export default Footer