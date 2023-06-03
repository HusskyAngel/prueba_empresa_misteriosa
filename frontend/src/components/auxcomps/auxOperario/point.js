import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

export default function Point(props){
  const onClick = () => {
    console.log("Item clicked!");
  };
  return (
      <ListItemButton onClick={onClick}>
        <ListItemIcon>
          <Avatar alt="Remy Sharp" src={props.imgp} />
        </ListItemIcon>
        <ListItemText primary="lat" secondary={props.lat} />
        <ListItemText primary="long" secondary={props.long}/>
        <ListItemText primary="Lugar" secondary={props.place}/>
      </ListItemButton>

  ); 
}
