import React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';




export default function BasicTextFields() {

  

    
  
  return (
    <Box
      style={{display:"flex", flexDirection:"column"}}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField id="standard-basic" label="Name" variant="standard" />
    <TextField id="standard-basic" type='email' label="email" variant="standard" />
    <TextField id="standard-basic" type='password' label="password" variant="standard" />
 
    <TextField id="standard-basic" label="Blood group (A+, A-, B+, B-, AB+, AB-, O+, 0-)" variant="standard" />
    <TextField id="standard-basic" type='number' label="Mobile no" variant="standard" />

    <TextField id="standard-basic" label="State" variant="standard" />

    <TextField id="standard-basic" label="city" variant="standard" />
    </Box>
  );
}
