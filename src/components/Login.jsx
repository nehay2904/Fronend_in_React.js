import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { WifiLock } from '@mui/icons-material'



const Login = () => {


  const [donor_email, setdonor_email] = useState('')
  const [password, setPassword] = useState('')

  const [postdata, setpostdata] = useState([{

    password: "",
    donor_email: "",

  }])

  const create_donors = (event) => {
    event.preventDefault()

      axios.post('http://localhost:5000/login', {
        donor_email,
        password,

      }).then((response) => {

        setpostdata([...postdata, {
          donor_email,
          password
        }])

      })



    setdonor_email("")
    setPassword("")

  }



  return (
    <div className='register'>
      <div className="box">
        <h5>Login Here as a donor & save a life</h5>

        <input className='input' type="email" name="" id="" placeholder='Email ID' value={donor_email} onChange={(e) => {
          setdonor_email(e.target.value)
        }} />
        <input className='input' type="password" name="" id="" placeholder='Password' value={password} onChange={(e) => {
          setPassword(e.target.value)
        }} />


        <input onClick={create_donors} className='subm input' type="submit" value="submit" placeholder='Submit' />

      </div>

    </div>
  )
}

export default Login