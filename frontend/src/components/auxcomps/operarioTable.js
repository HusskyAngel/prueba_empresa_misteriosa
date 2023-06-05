import MapView from './auxOperario/mapView';
import PointList  from  './auxOperario/pointsList';
import Controls from './auxOperario/controls';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Notifications from './auxOperario/notifications'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));
//map view not works inside stack  
export default function OperarioTable(){
    return (

    <div>
    <Box sx={{ width: "100%" , height:"100%"}}>
        <Stack spacing={5}>
          <Stack spacing={{ xs: 1, sm: 1 }} direction="row"   >
              <Item sx={{ width: "30%" , height:"70%", textAlign: 'center'}}>
               <MapView/>
              </Item>
            <Item><PointList/></Item>
          </Stack>
            <Notifications/>
            <Item><Controls/></Item>
        </Stack>
    </Box>
    </div>
    );
}
