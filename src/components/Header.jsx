import React from 'react'
import './header.css'
import Image from '../Images/image.png'
export default function Header() {
    return (
        <div className='header'>
            <div className="logo">
                <img className='logo-image' src={Image} alt="" srcset="" />
            </div>
            <div className="links">
                <div className="navlink">
                    <li className='nav-items'><a href="">HOME</a></li>
                    <li className='nav-items'><a href="">PAGES</a></li>
                    <li className='nav-items'><a href="">PORTFOLIOS</a></li>
                    <li className='nav-items'><a href="">HEADERS</a></li>
                    <li className='nav-items'><a href="">ELEMENTS</a></li>
                    <li className='nav-items'><a href="">BLOG</a></li>
                </div>
            </div>
            <div className="icons">
                <i className="social-media-icons fas fa-search"></i>
                <i className="social-media-icons fas fa-shopping-cart"></i>
                <i className="social-media-icons fas fa-bars"></i>
            </div>
        </div>
    )
}
