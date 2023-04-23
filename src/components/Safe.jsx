import React from 'react'
import image from '../components/secure.jpg'

import Fade from 'react-reveal/Fade';

const Safe = () => {
  return (
    <div className="donor">
        <div className="don_l">
            <img src={image} className='donor_img' alt="" srcset="" />
        </div>
        <div className="don_r">
        <Fade left>
             <h1 className='donor_tit'>Safe and Secure</h1>
             <h6 className='donor_sub'>Our platform ensures complete privacy and confidentiality for all involved parties, protecting donor and recipient information</h6>
             <button className='start_btn btn_start'>Our Security Policy</button>
        </Fade>
            
                </div>
    </div>
  )
}

export default Safe