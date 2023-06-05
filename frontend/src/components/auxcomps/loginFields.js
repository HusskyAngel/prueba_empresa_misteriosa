
import React, {useState,useEffect} from 'react';
import { TextField, Button,  Select, MenuItem } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import '../css/login.css'; // Import the CSS file
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';

const LoginFields = () => {
    const [dataa,setData]=useState({})
    const [redi,setRedi]=useState(false)
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [tipo, setTipo] = useState('oper');

    const onSubmit=async ()=>{

         const data = {
             tipo:tipo,
              correo:correo ,
              contrasena:contrasena 
         };
        await axios.post(process.env.REACT_APP_BACK+"/login/login", data)
          .then(response => {
            window.aler("entro")
            setRedi(true) 
            setData(response)
          })
          .catch(error => {
            window.alert('Correo o contraseña incorrecta' + error) 
          });

    }
    if(redi){
          if (tipo=="admin") {
            return (<Navigate to={{ pathname: '/admin', state: { data:dataa  } }} />);
          }else if(tipo=="oper"){
            return <Navigate  to={{ pathname: '/oper', state: { data:dataa  } }} />;
          }
    }
  return (
        <form className="form-container" onSubmit={onSubmit}> {/* Add the class name to the form container */}
        <Stack direction="column" spacing={2}>
          <Select
            value={tipo}
            onChange={r =>setTipo(r.target.value) }
          >
            <MenuItem value="oper">Operador</MenuItem>
            <MenuItem value="admin">Administrador</MenuItem>
          </Select>
        <TextField
            name="correo"
            value={correo}
            label="Correo"
            onChange={r =>setCorreo(r.target.value)}
          />
          <TextField
            name="contrasena"
            value={contrasena}
            label="Contrasena"
            type="password"
            onChange={r=>setContrasena(r.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" className="submit-button">
            Login
          </Button>
        </Stack>
        </form>
  );
};
export default LoginFields;
