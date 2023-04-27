import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Login = () => {



  return (
    <div className='register'>
        <div className="box">
           <h5>Login Here as a donor & save a life</h5>
        
           <input className='input' type="email" name="" id=""  placeholder='Email ID' />
            <input className='input' type="password" name="" id=""  placeholder='Password' />
       
         
           <input className='subm input' type="submit" value="submit" placeholder='Submit' />
           <Link  to='thanks'><button style={{display:"none", backgroundColor:"blue", textAlign:"center", color:"white"}} className='subm input' >Next</button></Link>        
        </div>
      <Link to='/'><h4 style={{color:'black', fontSize:21, marginTop:20}}>New user then Register</h4></Link>
    </div>
  )
}

export default Login