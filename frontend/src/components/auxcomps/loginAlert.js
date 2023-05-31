import Alert from '@mui/material/Alert';

function LoginAlert(props){
    if (props.alert==="")
        return <></>;
    else if (props.alert==="wrongpassword")
        return (<Alert severity="error">Contraseña incorrecta!</Alert>)
    else if (props.alert==="expiredsesion")
        return (<Alert severity="info">Sesión expirada por favor ingrese de nuevo!</Alert>)
}

export default LoginAlert;
