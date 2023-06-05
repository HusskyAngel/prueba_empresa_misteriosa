import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useSelector, useDispatch } from 'react-redux';
import Button from "@material-ui/core/Button";

export default function  Notifications(){
    const activo=useSelector(state=> state.NotificationProps.active); 
    const severity=useSelector(state=> state.NotificationProps.severity); //succes info warning  
    const message=useSelector(state=> state.NotificationProps.message); 
    const close=()=>{
        dispatch({type:'CHANGE_NOTIFICATION_PROPS',NotificationProps:{active: false , severity:"", message:""} })
    }
    const dispatch=useDispatch();

    if (activo){
        return(
        <Alert severity={severity}>
        <AlertTitle>{severity}</AlertTitle>
            {message}
            <Button onClick={close} color="primary"> cerrar</Button>
        </Alert>);
    }else{
        return (<></>)
    }
}
