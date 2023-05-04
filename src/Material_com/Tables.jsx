import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


export default function BasicTable({ donor_name,
  age,
  blood_group,
  state,
  city}) {
  return (
    <TableContainer  className='tables'>
      <Table aria-label="simple table" className='tables' >
        <TableHead className='tables'>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >Age</TableCell>
            <TableCell >Blood group</TableCell>
            <TableCell >State</TableCell>
            <TableCell >City</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
           
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {donor_name}
              </TableCell>
              <TableCell >{age}</TableCell>
              <TableCell >{blood_group}</TableCell>
              <TableCell >{state}</TableCell>
              <TableCell >{city}</TableCell>
              <Button style={{marginBottom:10}} size="small" variant="contained" color="success">Request</Button>
            </TableRow>
      
        </TableBody>
      </Table>
    </TableContainer>
  );
}
