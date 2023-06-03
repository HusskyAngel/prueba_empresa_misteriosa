import * as React from 'react';
import Typography from '@mui/material/Typography';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import Point from './point';



export default function PointList() {
const data=[{long:12 ,lat:213},{long:123 ,lat:12},{long:1231 ,lat:12},{long:13 ,lat:12} ];

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="Elementos del inventario"
      subheader={
        <ListSubheader component="div" id="Elementos del inventario">
          <Typography variant="h1" style={{ fontSize: '25px',fontWeight: 'bold' }}>
            Elementos del inventario
          </Typography>
        </ListSubheader>
      }
    >
      {data.map((item,index)=>(
        <Point lat={item.lat} long={item.long} place={"Cali"} imgp={"https://assets.bridgestonetire.com/content/dam/consumer/bst/la/co/tips/2022/tecnologia-de-llantas/deportivo.jpg"}/>
      )) }
    </List>
  );
}

