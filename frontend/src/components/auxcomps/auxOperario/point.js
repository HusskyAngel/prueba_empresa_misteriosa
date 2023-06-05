import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import {  useDispatch } from 'react-redux';

const Point=(props)=>{
  const dispatch=useDispatch();
  const m=props.Marker;
  const onClick = () => {
    dispatch({type: "UPDATE_CURRENT_MARKER",CurrentMarker: m});
    dispatch({type:'CHANGE_FLY'})
  };
  return (
      <ListItemButton onClick={onClick}>
        <ListItemIcon>
          <Avatar alt="Remy Sharp" src={m.imgl} />
        </ListItemIcon>
        <ListItemText primary="lat" secondary={m.lat} />
        <ListItemText primary="long" secondary={m.long}/>
        <ListItemText primary="Lugar" secondary={m.place}/>
      </ListItemButton>

  ); 
}
export default Point;
