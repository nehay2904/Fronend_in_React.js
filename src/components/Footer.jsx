import React from 'react'

import Logo from '../download.png'
import Home_logo from '.././Images/Bloodten.jpg'
const Footer = () => {
  return (
   <div className="con">
   <div className="footer">
   <div className="foot_sec">
        <h6 style={{color:"white", marginBottom:20}}>"Donate blood and save a life"</h6>
    </div>
    <div className="foot_sec">
        <h6 style={{color:"white", marginBottom:20}}>Home</h6>
    </div>
    <div className="foot_sec">
        <h6 style={{color:"white", marginBottom:20}}>Our privacy policy</h6>
    </div>
    <div className="foot_sec">
        <h6 style={{color:"white", marginBottom:20}}>About US</h6>
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