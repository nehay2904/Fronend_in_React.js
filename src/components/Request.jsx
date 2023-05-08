import { Button } from '@mui/material'
import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Request = () => {

    const [req_number, setreq_number] = useState('')
    const [req_blood_group, setreq_blood_group] = useState('')
    const [req_city, setreq_city] = useState('')
    const [req_state, setreq_state] = useState('')
     const [req_prop, setreq_prop] = useState('')
    const [pateintname, setpateintname] = useState('')

    const [postdata, setpostdata] = useState([{
        req_number:"",
        req_blood_group:"",
        req_city:"",
        req_state:"",
        req_prop:"",
        pateintname:""
       
    }])
 
    const create_donors = (event) => {
    
        event.preventDefault()
    
         alert("Our request is sent!! click the next button")
        axios.post('https://neha-y1003.onrender.com/req', {
            req_number,
            req_blood_group,
            req_city,
            req_state,
            req_prop,
            pateintname,
        }).then((response) => {
    
            setpostdata([...postdata, {
                req_number,
                req_blood_group,
                req_city,
                req_state,
                pateintname,
                req_prop
            }])  
        }
      )
          
        setreq_blood_group("")
        setreq_city("")
        setreq_number("")
        setreq_state("")
        setpateintname("")
        setreq_prop("")
    }
  return (
     <div className="request">
        <div className="reqform">
            <h2 style={{marginBottom:20}}> Request form</h2>
            <input className='input' type="text" placeholder='Enter your name' value={pateintname} onChange={(e)=>{
                setpateintname(e.target.value)
            }}/>
            <input className='input' type="number" placeholder='Enter your mobile no' value={req_number} onChange={(e)=>{
                setreq_number(e.target.value)
            }}/>
          
          <select style={{marginTop:7, padding:7, width:"100%", border:'none'}} name="" id=""  value={req_blood_group} onChange={(e) => {
            setreq_blood_group(e.target.value)
          }} >
             <option value="">please select your blood group</option>
            <option value="O+">O+</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="AB+">AB+</option>
           
            <option value="O-">O-</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="AB-">AB-</option>
          </select>
          <select style={{marginTop:7, padding:7, width:"100%", border:'none'}} name="" id=""   value={req_state} onChange={(e) => {
            setreq_state(e.target.value)
          }}>
             <option value="">please select your state</option>
            <option value="TELANGANA">TELANGANA</option>
        
           
          </select>
          <select style={{marginTop:7, padding:7, width:"100%", border:'none'}} name="" id=""   value={req_city} onChange={(e) => {
            setreq_city(e.target.value)
          }}  >
             <option value="">please select your city</option>
            <option value="ADILABAD">ADILABAD</option>
            <option value="HYDERABAD">HYDERABAD</option>
            <option value="KARIMNAGAR">KARIMNAGAR</option>
            <option value="WARANGAL">WARANGAL</option>
            <option value="KHAMMAM">KHAMMAM</option>
            <option value="MEDAK">MEDAK</option>
            <option value="NALGONDA">NALGONDA</option>
            <option value="NIZAMABAD">NIZAMABAD</option>
            <option value="RANGAREDDY">RANGAREDDY</option>
            <option value="MEHBOOBNAGAR">MEHBOOBNAGAR</option>
 
          </select>
        
             <input  className='input' type="text" placeholder='Reason for the blood requirement' value={req_prop} onChange={(e)=>{
                setreq_prop(e.target.value)
            }}/>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <Button style={{marginTop:20}} onClick={create_donors} >Submit</Button>
           <Link to='/find_donor'> <button style={{marginTop:20, width:100}} className='home_btn btn' >Next</button>
          </Link>
            </div>  
   
        </div>
     </div>
  )
}

export default Request