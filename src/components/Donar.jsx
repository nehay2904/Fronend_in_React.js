import React from 'react'
import image from '../components/donor.jpg'

import Fade from 'react-reveal/Fade';
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
             <button className='start_btn'>REGISTER AS DONOR</button>
     
             </div>
                </div>
    </div>
  )
}

export default Donar