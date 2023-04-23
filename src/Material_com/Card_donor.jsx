import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const MultiActionAreaCard = ( { donor_name,
donor_email,
age,
mobile_no,
blood_group,
state,
city}) => {
  return (
    <Card sx={{ maxWidth: 290 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Name: {donor_name}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Age: {age}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Email: {donor_email}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Location : {city}, {state}
          </Typography>
            
          <Typography variant="body2" color="text.secondary">
             Blood Group: {blood_group}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Contact :{mobile_no}
        </Button>
      </CardActions>
    </Card>
  );
}


export default MultiActionAreaCard