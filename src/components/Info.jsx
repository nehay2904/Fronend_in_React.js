import React from 'react'
import './info.css'
import infoImage from '../Images/AboutImage.jpg';
export default function Info() {
    return (
        <div className='info'>
           <div className="info-container container">
               <div className="row">
                   <div className="col">
                   <div className="design">
                  <div className="heading-design">
                  We design & develop 
                  
                   
                  </div>
                  <div className="heading-design">
                  creative digital strategies
                  </div>
                  <div className="main-design">
                  Specializing Master in Service Design trains specialists in the design
                      
                  </div>
                  <div className="main-desig">
                 
                       of services for businesses and public-sector organizations.
                  </div>
                  <button className='button'>REQUEST A QUOTE TODAY</button>
              </div>
                   </div>
                   <div className="col">
                       <img className='infoImage' src={infoImage} alt="" srcset="" />
                   </div>
               </div>
           </div>
        </div>
    )
}
