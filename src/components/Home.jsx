import React from 'react'
import Logo from '../download.png'
import Home_logo from '.././Images/Bloodten.jpg'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
const Home = () => {
  return (
    <div className='home'>
       
        <div className="navbar">
         <div className='nav_logo'>
         <img src={Logo} className='logo_image' alt="" srcset="" />
         <h1 className='logo_h1'>Save Lives</h1>
         </div>
         <div style={{display:"flex", flexDirection:"row"}}>
         <Link style={{marginTop:7}}  to='register'><button className='start_btn'>Register as donor</button></Link>
      
           
         </div>
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
        <h4 className='subtitles'>Connect with donars quickly and easily during life-threatening situations</h4>
       
        </Fade>
        <h6 style={{ marginBottom:20}}> <span style={{color:"red"}}>*** </span> save lives is not a blood bank and does not involves in collection storage and transportation of blood  <span style={{color:'red'}}>*** </span> </h6>
        <Link style={{marginTop:7}}  to='policy'> <button  className='start_btn'>Find a donor</button></Link>
       
           {/* <div className="login">
            <input type="text" className='input' name="" id="" placeholder='Enter your email' />
             <button className='start_btn'>Submit</button>
           </div> */}
        </div>
        <div className="right_body">
          <img className='home_logo' src={Home_logo} alt="" srcset="" />
        </div>
       </div>
    </div>
  )
}

export default Home