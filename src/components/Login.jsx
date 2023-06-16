import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const Login = () => {

    const [donor_email, setdonor_email] = useState('')
    const [password, setPassword] = useState('')
    


    const [postdata, setpostdata] = useState([{
       
        password: "",
        donor_email: "",
      
    }])
 
    const navigate = useNavigate();
    const create_donors = (event) => {

       

        event.preventDefault()

        alert('Your response is submitted u r a life saver')

        axios.post('https://mongodb-server-lmts.onrender.com/login', {
        
            donor_email,
            password
        }).then((response) => {


            setpostdata([...postdata, {
              
                donor_email,
                password,
              
            }])


        }
        )





    
        setdonor_email("")
        setPassword("")

        navigate('/');


    }
    return (

        <form style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: 'center' }} onSubmit={create_donors}>
            <h5 style={{marginTop:20, marginBottom:20}}>Login here and  become the  life saver </h5>
            <p>(Currently now we are working on telangana state)</p>
            <input
               className='inputs'
                type="email"
                placeholder="Email"
                value={donor_email}
                onChange={(e) => setdonor_email(e.target.value)}
                required
            />
         
            <input
                type="Password"
                placeholder="Password"
                className='inputs'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
        
            <button type="submit" className='btn'>Login</button>
            <p style={{marginTop:20}}>Not registered  yet? please <Link to={'/register'}>register</Link></p>
        </form>
    )
}

export default Login