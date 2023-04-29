import React from 'react'
import image from '../components/donor.jpg'

import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
const Donar = () => {
  return (
    <div className="donor">
        <div className="don_l">
            <img src={image} className='donor_img' alt="" srcset="" />
        </div>
        <div className="don_r">
        <Fade bottom>
        <h1 className='donor_tit'>Easily find blood donors.</h1>
             <h6 className='donor_sub'>BloodConnect makes it easy for individuals to connect with blood donors during life threatening emergences</h6>
             
        </Fade>
           <div>
             
             <Link  to='register'><button className='start_btn'>REGISTER AS DONOR</button></Link>
             </div>
                </div>
    </div>
  )
}

export default Donar