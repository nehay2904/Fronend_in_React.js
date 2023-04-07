import React from 'react'
import image from '../components/response.jpg'

import Fade from 'react-reveal/Fade';
const Response = () => {
  return (
    <div className="donor">
        <div className="don_r">
             <Fade bottom>
             <h1 className='donor_tit'>Faster response times</h1>
             <h6 className='donor_sub'>With a growing database of donors, you  can find a match faster and save precious time in the event of an emergency</h6>
           
              </Fade>
        </div>
        <div className="don_l">
            <img src={image} className='donor_img' alt="" srcset="" />
        </div>
        
    </div>
  )
}

export default Response