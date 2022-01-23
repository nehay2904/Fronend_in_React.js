import React, { useState } from 'react'
import './review.css'
import '../data/reviewsData'
import image1 from '../Images/projectImage2.jpg'
import image2 from '../Images/projectImage3.jpg'
import image3 from '../Images/projectImage5.jpg'
import image4 from '../Images/projectImage6.jpg'
import image5 from '../Images/projectImage7.jpg'
import image6 from '../Images/projectImage8.jpg'

export default function Reviews(reviewer) {


    return (
      <div className="review">
          <div className="review-container container">
          
                   <div className="reviews-heading">
                      OUR CLIENTS SAY
                   </div>
                   <div className="row">
                         <img className='reviews-image' src={image1} alt="" srcset="" />
                        <img className='reviews-image' src={image2} alt="" srcset="" />
                       <img className='reviews-image' src={image3} alt="" srcset="" />
                       <img className='reviews-image' src={image4} alt="" srcset="" />
                       <img className='reviews-image' src={image5} alt="" srcset="" />
                        <img className='reviews-image' src={image6} alt="" srcset="" />
                  </div>
                  <div className="review-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, debitis!
            </div>
            <div className="review-agency1">
                lorem isprum
            </div>
            <div className="review-agency2">
                 lorem
            </div>
              </div>
          </div>
     
    )
}
