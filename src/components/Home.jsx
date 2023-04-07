import React from 'react'
import Logo from '../download.png'
import Home_logo from '../components/home_pic.jpg'

import Fade from 'react-reveal/Fade';
const Home = () => {
  return (
    <div className='home'>
       
        <div className="navbar">
        <img src={Logo} className='logo_image' alt="" srcset="" />
         <h1 className='logo_h1'>BloodConnect</h1>
        </div>
       <div className="body">
        <div className="left_body">
        <Fade bottom>
        <h1 className='heading'>Connecting</h1>
        <h1 className='heading'>Blood</h1>
        <h1 className='heading'>Donor</h1>
        <h1 className='heading'>During</h1>
        <h1 className='heading'>Emergency</h1>
       
        </Fade>
        <Fade bottom>
        <h4 className='subtitle'>Connect with donars quickly and easily during life-threatening situations</h4>
       
        </Fade>
        <button  className='start_btn'>Get started</button>
           <div className="login">
            <input type="text" className='input' name="" id="" placeholder='Enter your email' />
             <button className='start_btn'>Submit</button>
           </div>
        </div>
        <div className="right_body">
          <img className='home_logo' src={Home_logo} alt="" srcset="" />
        </div>
       </div>
    </div>
  )
}

export default Home