import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Login from './Login'
const Register = () => {


  const [donor_name, setdonor_name] = useState('')
  const [donor_email, setdonor_email]  = useState('')
  const [password, setPassword]  = useState('')
  const [age, setage] = useState('')
  const [mobile_no, setmobile_no] = useState('')
  const [blood_group, setblood_group] = useState('')
  const [state, setstate] = useState('')
  const [city, setcity] = useState('')

  const [postdata, setpostdata] = useState([{
      donor_name:"",
      password:"",
      donor_email:"",
      age:"",
      mobile_no:"",
      blood_group:"",
      state:"",
      city:""
  }])

  const create_donors = (event) => {
  
    
    event.preventDefault()

    alert('Your response is submitted the appropriate donor will contact u soon')

    axios.post('http://localhost:5000/moo', {
      donor_name,
      donor_email,
      password,
      age,
      mobile_no,
      blood_group,
      state,
      city
    }).then((response) => {

        setpostdata([...postdata, {
          donor_name,
          donor_email,
          password,
          age,
          mobile_no,
          blood_group,
          state,
          city
        }])
        
      
       
    }
  )
  setblood_group("") 
  setage("")
  setdonor_name("")
  setdonor_email("")
  setmobile_no("")
  setstate("")
  setcity("")
  setPassword("")
}
  return (
    <div className='register'>
        <div className="box">
           <h5>Register Here as a donor & save a life</h5>
           <input className='input' type="text" placeholder='Full_Name' value={donor_name} onChange={(e) => {
            setdonor_name(e.target.value)
          }} />
           <input className='input' type="number" name="Age" id="" placeholder='Age' value={age} onChange={(e) => {
            setage(e.target.value)
          }} />
           <input className='input' type="email" name="" id=""  placeholder='Email ID' value={donor_email} onChange={(e) => {
            setdonor_email(e.target.value)
          }}/>
            <input className='input' type="password" name="" id=""  placeholder='Password' value={password} onChange={(e) => {
            setPassword(e.target.value)
          }}/>
           <input className='input' type="text"  placeholder='Blood_group' value={blood_group} onChange={(e) => {
            setblood_group(e.target.value)
          }} />
           <input className='input' type="text" placeholder='Mobile_no' value={mobile_no} onChange={(e) => {
            setmobile_no(e.target.value)
          }} />
           <input className='input' type="text"  placeholder='State' value={state} onChange={(e) => {
            setstate(e.target.value)
          }} />
           <input className='input' type="text"  placeholder='City' value={city} onChange={(e) => {
            setcity(e.target.value)
          }} />
         
           <input  onClick={create_donors}  className='subm input' type="submit" value="submit" placeholder='Submit' />
         
        </div>
        <Link to='/'> <button style={{marginTop:20, width:100}} className='home_btn btn' >Go back</button>
            </Link>
        </div>
  )
}

export default Register