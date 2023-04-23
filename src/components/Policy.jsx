import React from 'react'
import { Link } from 'react-router-dom'
const Policy = () => {
  return (
    <div className='policy'>
      <div className="contain">
         <h4 style={{textAlign:"center", marginBottom:30}}>Our Terms and conditions</h4>
          <h6 style={{lineHeight:1.6, fontSize:17}}>1. These terms of use (the “Terms”) mandate the terms on which the users (“You” or “Your” or “Yourself” or “User”) access and register on the web based platform save lives </h6>
          <h6 style={{lineHeight:1.6, fontSize:17}}>2.  By clicking on the “I accept” button provided in the Platform, You expressly accept these Terms and the Privacy Policy and agree to be legally bound by them. Further, by furnishing Your personal information to the Company or giving Your consent to the Company to access Your personal information for the purpose of rendering the Services (as defined below), You also agree that You are interested in availing the Services through the Platform in accordance with these Terms.</h6>
          <h6 style={{lineHeight:1.6, fontSize:17}}>3. The Company retains an unconditional right to modify or amend these Terms without any requirement to notify You of the same. You can determine when these Terms were last modified by referring to the “Last Updated” legend above. Your acceptance of the amended Terms shall signify Your consent to such changes and agreement to be legally bound by the same.</h6>
          <h6 style={{lineHeight:1.6, fontSize:17}}>4. The information given to the compamy must be relevent, correct and up to date </h6>
          <h6 style={{lineHeight:1.6, fontSize:17}}>5. And the use of this information must be used for the relevent purpose eg for live saving</h6>
      </div>
  <div style={{display:"flex"}}>
  <Link to='list_donor'><div><button style={{backgroundColor:"green"}}  className='btn' >Accept</button></div></Link>
      <Link to='/'><div><button style={{backgroundColor:"red" , marginLeft:10}}  className='btn' >Back</button></div></Link>
    
    </div>  
    </div>
  )
}

export default Policy