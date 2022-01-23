import React from 'react';
import Image from '../Images/image.png';
import './navBar.css'


export default function Navbar() {
  return (
    <div className='navbar'>
            <div className='logo'>
                <img className='logo-image' src={Image} alt="" srcset="" />
            </div>
           
                 <div className='nav-links'>
                    <li className='nav-items'><a href="">HOME</a></li>
                    <li className='nav-items'><a href="">PAGES</a></li>
                    <li className='nav-items'><a href="">PORTFOLIOS</a></li>
                    <li className='nav-items'><a href="">HEADERS</a></li>
                    <li className='nav-items'><a href="">ELEMENTS</a></li>
                    <li className='nav-items'><a href="">BLOG</a></li>
                </div>
                <div className="icons">
                <i className="navbar-icons fas fa-search"></i>
                <i className="navbar-icons fas fa-shopping-cart"></i>
                <i className="navbar-icon fas fa-bars"></i>
            </div>
          
    </div>
  )
}
