import * as React from 'react';
import Typography from '@mui/material/Typography';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import Point from './point';
import ScrollArea from "react-scrollbar";
import { useSelector, useDispatch } from 'react-redux';


export default function PointList() {
  const data=useSelector(state=> state.Points);

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

    <ScrollArea>
      {data.map((item,index)=>(
        <Point Marker={item} />
      )) }

    </ScrollArea>
    </List>
  );
}

