import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';


export default function OperarioInfo(){
    const nombre=useSelector(state=>state.User.nombre)
    const apellido=useSelector(state=>state.User.apellido)
    const correo=useSelector(state=>state.User.correo)
    const cargo=useSelector(state=>state.User.cargo)
    const superior="admin"
    const superiorContacto="admin@gmail.com"
    return (
        <Box alignItems="center" justifyContent="center">
                  <Typography component="div" variant="h6">
                    Nombre 
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    <p>{nombre}</p>
                </Typography>
                  <Typography component="div" variant="h6">
                     Apellido
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                  <p>{apellido}</p>
                  </Typography>
                  <Typography component="div" variant="h6">
                     Correo
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                  <p>{correo}</p>
                  </Typography>
                  <Typography component="div" variant="h6">
                     Cargo
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                  <p>{cargo}</p>
                  </Typography>
                  <Typography component="div" variant="h6">
                     Superior
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                  <p> {superior} </p>
                  </Typography>
                  <Typography component="div" variant="h6">
                    Contacto del superior
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                  <p>{superiorContacto}</p>
                  </Typography>1

        </Box>
    );
}
