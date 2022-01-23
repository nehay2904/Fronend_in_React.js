import React from 'react'
import image from '../Images/logo-koral.png'
import './footer.css'
export default function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                <div className="col">
                      <i className="social-icons far fa-phone" />
                    
                      <div className="contact-heading">
                          CALL US
                      </div>
                      <div className="call-us-contact-content">
                           PT (+351) 729 133 194
                      </div>
                      <div className="call-us-contact-content">
                      AU (+18) 833 841 442
                      </div>
                </div>
                <div className="col">
                <i className="social-icons far fa-envelope"></i>
                 
                      <div className="contact-heading">
                          EMAIL US
                      </div>
                      <div className="email-us-contact-content">
                      marketing@example.com
                      </div>
                      <div className="email-us-contact-content">
                      hello@example.com
                      </div>
                </div>
                <div className="col">
                
               <i className="social-icons fas fa-map-marker-alt"></i>
              
                     <div className="contact-heading">
                
                         OUR HOME
                     </div>
                     <div className="our-home-contact-content">
                     PO Box 16122 Collins Street West
                     </div>
                     <div className="our-home-contact-content">
                     Victoria 8007 Australia
                     </div>
                </div>
            </div>
        </div>
    
            
            <div className="copyright">
                <div className="copyright-heading">
                        INSTAGRAM @UPPER
                </div>
                <div className="copyright-content">
                Something went wrong. Please re-authorize Instagram on Appearance  Koral Options Social Networks  Instagram and clicking on Authorize Instagram.
                </div>
                <div className="copyright-logo">
                    <img src={image} alt="" srcset="" />
                </div>
                <div className="copyright-icons">
                <i className="social-icon fab fa-facebook-f"></i>
                <i className="social-icon fab fa-instagram"></i>
                <i className="social-icon fab fa-twitter"></i>
                <i className="social-icon fab fa-pinterest"></i>
                </div>
                <div className="copyright-ending">
                     Koral © 2021 by Upper
                </div>
            </div>
        </div>
    )
}
