import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div className='home'>
        <div style={{display: "flex"}}>
        <h2>Welcome Neha</h2>
        <Link to={'/update'}><i style={{marginLeft:12, marginTop:9, fontSize:22}} className="fas fa-edit"></i></Link>
        </div>
        <p>Congratulations for being a life saver</p>
         <div style={{marginTop:30, padding:10, border:"gray", borderWidth:1, backgroundColor:'gray'}}>
            
         <h6>Email Id</h6>
         <h6>Mobile</h6>
         <h6>Age:21</h6>
         <h6>Blood group: A+</h6>
         <h6>Location: city ,state</h6>
   
         </div>
         <Link to={'/'}>  <p style={{marginTop:20, color:"red"}}>Sign out</p></Link>
          </div>
  )
}

export default Profile