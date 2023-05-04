import { Button } from '@mui/material'
import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Feedback = () => {

    const [username, setusername] = useState('')
    const [feedback, setfeedback] = useState('')
   
    const [postdata, setpostdata] = useState([{
        username:"",
        feedback:"",
      
       
    }])

    const create_donors = (event) => {
    
        event.preventDefault()
    
         alert("Our Feedback will be appreiated")
        axios.post('https://neha1268.onrender.com/feedback', {
            username,
            feedback,
     
        }).then((response) => {
    
            setpostdata([...postdata, {
                username,
                feedback,
              
            }])  
        }
      )
          
        setfeedback("")
        setusername("")
    }
  return (
     <div className="request">
        <div className="feedbackform" style={{backgroundColor:"gray"}}>
            <h2 style={{marginBottom:20}}> Feedback form</h2>
            <input className='input' type="text" placeholder='Name' value={username} onChange={(e)=>{
                setusername(e.target.value)
            }}/>
            <input className='input' type="text"  placeholder='Your Feedback'  value={feedback} onChange={(e)=>{
                setfeedback(e.target.value)
            }}/>
           
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <Button style={{marginTop:20}} onClick={create_donors} >Submit</Button>
         
            </div>  
   
        </div>
     </div>
  )
}

export default Feedback