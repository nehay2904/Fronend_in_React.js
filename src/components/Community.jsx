import React from 'react'
import Image from '../components/donor.jpg'

import Fade from 'react-reveal/Fade';
const Community = () => {
  return (
    <div className="com">
        <div>
        <img src={Image} className='com_img' alt="" srcset="" />
        <img src={Image} className='com_img' alt="" srcset="" />
        <img src={Image} className='com_img' alt="" srcset="" />
        <img src={Image} className='com_img' alt="" srcset="" />
        <img src={Image} className='com_img' alt="" srcset="" />
        <img src={Image} className='com_img' alt="" srcset="" />
        <img src={Image} className='com_img' alt="" srcset="" />
        </div>
        <Fade bottom>
        <h1 className='com_title'>Join our platform today and become a part of our lifesaving community.</h1>
        </Fade>
        <div className="login_com2">
            <input type="text" className='com_input' name="" id="" placeholder='Enter your email' />
             <button className='start_btn'>Submit</button>
           </div>
    </div>
  )
}

export default Community