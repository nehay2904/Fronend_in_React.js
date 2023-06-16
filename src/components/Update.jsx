import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const Update= () => {


    const [donor_name, setdonor_name] = useState('')
    const [donor_email, setdonor_email] = useState('')
    const [password, setPassword] = useState('')
    const [age, setage] = useState('')
    const [mobile_no, setmobile_no] = useState('')
    const [blood_group, setblood_group] = useState('')
    const [state, setstate] = useState('')
    const [city, setcity] = useState('')


    const [postdata, setpostdata] = useState([{
        donor_name: "",
        password: "",
        donor_email: "",
        age: "",
        mobile_no: "",
        blood_group: "",
        state: "",
        city: ""
    }])
 
    const navigate = useNavigate();
    const create_donors = (event) => {

       

        event.preventDefault()

        alert('Your response is submitted u r a life saver')

        axios.post('https://mongodb-server-lmts.onrender.com/update', {
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

        navigate('/register');


    }
    return (

        <form style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: 'center' }} onSubmit={create_donors}>
            <h5 style={{marginTop:20, marginBottom:20}}>Edit profile</h5>
            <input
               className='inputs'
                type="email"
                placeholder="Email"
                value={donor_email}
                onChange={(e) => setdonor_email(e.target.value)}
                required
            />
            <input
                type="name"
                placeholder="name"
                className='inputs'
                value={donor_name}
                onChange={(e) => setdonor_name(e.target.value)}
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
            <input
                type="number"
                placeholder="Age"
                className='inputs'
                value={age}
                onChange={(e) => setage(e.target.value)}
                required
            />
              <select className='style'  name="" id="" value={blood_group} onChange={(e) => {
                setblood_group(e.target.value)
            }}  required >
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

            <input
                type="number"
                className='inputs'
                placeholder="Mobile no"
                value={mobile_no}
                onChange={(e) => setmobile_no(e.target.value)}
                required
            />
            <select className='style'  name="" id=""   value={state} onChange={(e) => {
            setstate(e.target.value)
          }} required>
             <option value="">please select your state</option>
            <option value="TELANGANA">TELANGANA</option>
        
           
          </select>
          <select className='style' name="" id=""   value={city} onChange={(e) => {
            setcity(e.target.value)
          }} required >
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
        
            <button type="submit" className='btn'>Update</button>
        </form>
    )
}

export default Update