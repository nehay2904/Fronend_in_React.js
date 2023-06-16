import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const Request = () => {


    const [patient_name, setpatient_name] = useState('')
    const [patient_desc, setpatient_desc] = useState('')
    const [req_number, setreq_number] = useState('')
    const [req_blood_group, setreq_blood_group] = useState('')
    const [req_state, setreq_state] = useState('')
    const [req_city, setreq_city] = useState('')


    const [postdata, setpostdata] = useState([{
        patient_name: "",
        patient_desc: "",
        req_number: "",
        req_blood_group: "",
        req_state: "",
        req_city: ""
    }])
 
    const navigate = useNavigate();
    const create_patients = (event) => {

       

        event.preventDefault()

        alert('Your response is submitted u r a life saver')

        axios.post('https://mongodb-server-lmts.onrender.com/request', {
          
            patient_email,
            patient_desc,
            req_number,
            req_blood_group,
            req_state,
            req_city
        }).then((response) => {


            setpostdata([...postdata, {
                patient_email,
                patient_desc,
                req_number,
                req_blood_group,
                req_state,
                req_city
            }])


        }
        )





        setreq_blood_group("")
        setpatient_name("")
        setpatient_desc("")
        setreq_number("")
        setreq_state("")
        setreq_city("")
        setPassword("")

        navigate('/');


    }
    return (

        <form style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: 'center' }} onSubmit={create_patients}>
            <h5 style={{marginTop:20, marginBottom:20}}>Request here and  become the  life saver </h5>
            <p>(Currently now we are working on telangana req_state)</p>
          
            <input
                type="name"
                placeholder="name"
                className='inputs'
                value={patient_name}
                onChange={(e) => setpatient_name(e.target.value)}
                required
            />
          
          <input
               className='inputs'
                type="desc"
                placeholder="Reason for blood requirement"
                value={patient_email}
                onChange={(e) => setpatient_email(e.target.value)}
                required
            />
              <select className='style'  name="" id="" value={req_blood_group} onChange={(e) => {
                setreq_blood_group(e.target.value)
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
                placeholder="mobile no"
                value={req_number}
                onChange={(e) => setreq_number(e.target.value)}
                required
            />
            <select className='style'  name="" id=""   value={req_state} onChange={(e) => {
            setreq_state(e.target.value)
          }} required>
             <option value="">please select your req_state</option>
            <option value="TELANGANA">TELANGANA</option>
        
           
          </select>
          <select className='style' name="" id=""   value={req_city} onChange={(e) => {
            setreq_city(e.target.value)
          }} required >
             <option value="">please select your req_city</option>
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
        
            <button type="submit" className='btn'>Request</button>
          </form>
    )
}

export default Request