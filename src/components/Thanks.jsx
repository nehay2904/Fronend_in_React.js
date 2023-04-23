import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Images/Bloodfive.jpg'
const Thanks = () => (
   <div className="thanks">
      <img src={Image} alt="" style={{width:400, marginBottom:40}} srcset="" />
      <h4 className='thanks_h1'>Your record is submitted successfully and Thanks for being a superhero 🎉</h4>
   
      <Link style={{marginTop:7}}  to='/'>  <button className='home_btn btn'>GO Back</button></Link>
      
   </div>
)

export default Thanks