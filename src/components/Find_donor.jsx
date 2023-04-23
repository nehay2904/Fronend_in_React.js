import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const Find_donor = () => {

  const [donor_name, setdonor_name] = useState('')
  const [donor_email, setdonor_email]  = useState('')
  const [age, setage] = useState('')
  const [mobile_no, setmobile_no] = useState('')
  const [blood_group, setblood_group] = useState('')
  const [state, setstate] = useState('')
  const [city, setcity] = useState('')

 
   const [postdata, setpostdata] = useState([{
    donor_name:"",
    donor_email:"",
    age:"",
    mobile_no:"",
    blood_group:"",
    state:"",
    city:""
  }])

  const create_donors = (event) => {

    event.preventDefault()


    axios.post('http://localhost:5000/moo', {
      donor_name,
      donor_email,
      age,
      mobile_no,
      blood_group,
      state,
      city
    }).then((response) => {

        setpostdata([...postdata, {
          donor_name,
          donor_email,
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
}

useEffect(() => {
  axios.get('http://localhost:5000/foo').then((response) => {
      setpostdata(response.data)
  })

}, [])


  return (
    <div className='find_donor'>
      <div style={{display:"none"}}>
      <input className='input' type="text" placeholder='Full_Name' value={donor_name} onChange={(e) => {
            setdonor_name(e.target.value)
          }} />
           <input className='input' type="number" name="Age" id="" placeholder='Age' value={age} onChange={(e) => {
            setage(e.target.value)
          }} />
           <input className='input' type="email" name="" id=""  placeholder='email ID' value={donor_email} onChange={(e) => {
            setdonor_email(e.target.value)
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
         
           <input  onClick={create_donors} className='subm input' type="submit" value="submit" placeholder='Submit' />
           
      </div>
      <div className="lists">
        <h4 className='donor_title'>Find the donor in emergency situations</h4>
         <div className="donors">
         {postdata.map((donor) => (
              <Card style={{margin:10, width:"90%"}}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Name: {donor.donor_name}
                  </Typography>
                  <Typography variant="body3" color="text.secondary">
                    Age: {donor.age}
                  </Typography> <br/>
                  <Typography variant="body3" color="text.secondary">
                    Email: {donor.donor_email}
                  </Typography> <br/>
                  <Typography variant="body3" color="text.secondary">
                    Location : {donor.state}, {donor.city}
                  </Typography>
                    
                  <Typography variant="body2" color="text.secondary">
                     Blood Group: {donor.blood_group}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Contact : {donor.mobile_no}
                </Button>
              </CardActions>
            </Card>
          ))}
           
         </div>
        <div style={{marginTop:30}}>
        <Link style={{marginTop:7}}  to='/'>  <button className='home_btn btn'>GO Back</button></Link>
      
        </div>
      </div>
    </div>
  )
}

export default Find_donor