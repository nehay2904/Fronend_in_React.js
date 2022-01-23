import React from 'react'
import './ourProject.css'
import image1 from '../Images/projectImage1.jpg'
import image2 from '../Images/projectImage2.jpg'
import image3 from '../Images/projectImage3.jpg'
import image4 from '../Images/projectImage4.jpg'
import image5 from '../Images/projectImage5.jpg'
import image6 from '../Images/projectImage6.jpg'
import image7 from '../Images/projectImage7.jpg'
import image8 from '../Images/projectImage8.jpg'

export default function OurProjects() {
    return (
        <div className='our-projects'>
            <div className="our-project-heading">
                OUR LATEST PROJECTS
            </div>
            <div className="card-container container">
                <div className="row">
                    <div className="col">
                   
                    <img className='project-image' src={image4} alt="" srcset="" />
                    
                    <img className='project-image' src={image5} alt="" srcset="" />
                  
                    <img className='project-image' src={image6} alt="" srcset="" />
                    </div>
                    <div className="col">
                   
                   <img className='project-image' src={image4} alt="" srcset="" />
                   
                   <img className='project-image' src={image5} alt="" srcset="" />
                 
                   <img className='project-image' src={image6} alt="" srcset="" />
                   </div>
                   <div className="col">
                   
                   <img className='project-image' src={image4} alt="" srcset="" />
                   
                   <img className='project-image' src={image5} alt="" srcset="" />
                 
                   <img className='project-image' src={image6} alt="" srcset="" />
                   </div>
                </div>
                    </div>
                </div>
            
    )
}
