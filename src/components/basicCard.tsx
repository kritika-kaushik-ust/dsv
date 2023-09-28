import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import userData from '../data';

const appdata=userData.filter(user=>user.age>=18)
console.log(appdata)
function generateId(id: number){
  return Math.floor(Math.random() + id);
}
export default function BasicCard() {
  return (
    <div className="row my-5">
        {
  appdata.map((user, index) => {
  return (
    <Card key={index} sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {generateId(user.id)}
        </Typography> 
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Name : {user.name}
        </Typography>        
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Age : {user.age}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Address : {user.address}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Company: {user.company.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Remove</Button>
      </CardActions>
    </Card>
  ) } )
}</div>);}

