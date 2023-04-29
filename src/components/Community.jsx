import React from 'react'
// import Image from '../Images/donor.jpg'
import Image from '../Images/Bloodten.jpg'
import Imageone from '../Images/Bloodfive.jpg'
import Imagetwo from '../Images/Bloodfour.png'
import Imagethree from '../Images/BloodOne.png'
import Imagefour from '../Images/Bloodtwo.png'
import Fade from 'react-reveal/Fade';
const Community = () => {
  return (
    <div className="com">
        <div>
        <img src={Image} className='com_img' alt="" srcset="" />
        <img src={Imageone} className='com_img' alt="" srcset="" />
        <img src={Imagetwo} className='com_img' alt="" srcset="" />
        <img src={Imagethree} className='com_img' alt="" srcset="" />
        <img src={Imagefour} className='com_img' alt="" srcset="" />
       
        </div>
        <Fade bottom>
        <h1 className='com_title'>Contribute in our platform today and become a part of our lifesaving community.</h1>
           <h6 style={{marginTop:30, color:"gray"}}>The website is under development your donation will help to improvise our website</h6>
           <div className="login_com">
             <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_WuF-qOl-hhHxTwH_5bBoAPXEM9FVzIPDNJbVHDTPlCLdTA/viewform?usp=sf_link" target='blank'><button className='start_btn'>Donate</button></a>

           </div>
        </Fade>
    
    </div>
  )
}

export default Community