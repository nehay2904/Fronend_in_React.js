import { Button } from '@mui/material'
import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Request = () => {

    const [req_number, setreq_number] = useState('')
    const [req_blood_group, setreq_blood_group] = useState('')
    const [req_city, setreq_city] = useState('')
    const [req_state, setreq_state] = useState('')

    const [postdata, setpostdata] = useState([{
        req_number:"",
        req_blood_group:"",
        req_city:"",
        req_state:""
       
    }])
 
    const create_donors = (event) => {
    
        event.preventDefault()
    
         alert("Our request is sent!! we will contact u shortly, if there's any appropriate donor ")
        axios.post('https://neha1268.onrender.com/reqmoo', {
            req_number,
            req_blood_group,
            req_city,
            req_state
        }).then((response) => {
    
            setpostdata([...postdata, {
                req_number,
                req_blood_group,
                req_city,
                req_state
            }])  
        }
      )
          
        setreq_blood_group("")
        setreq_city("")
        setreq_number("")
        setreq_state("")
    }
  return (
     <div className="request">
        <div className="reqform">
            <h2 style={{marginBottom:20}}> Request form</h2>
            <input className='input' type="text" placeholder='Enter your mobile no' value={req_number} onChange={(e)=>{
                setreq_number(e.target.value)
            }}/>
            <input className='input' type="text" placeholder='Enter blood group' value={req_blood_group} onChange={(e)=>{
                setreq_blood_group(e.target.value)
            }}/>
            <input className='input' type="text" placeholder='City' value={req_city} onChange={(e)=>{
                setreq_city(e.target.value)
            }}/>
            <input className='input' type="text" placeholder='state' value={req_state} onChange={(e)=>{
                setreq_state(e.target.value)
            }}/>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <Button style={{marginTop:20}} onClick={create_donors} >Submit</Button>
           <Link to='/'> <button style={{marginTop:20, width:100}} className='home_btn btn' >Go back</button>
          </Link>
            </div>  
   
        </div>
     </div>
  )
}

export default Request