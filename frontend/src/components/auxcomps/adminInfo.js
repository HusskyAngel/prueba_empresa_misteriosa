import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function AdminInfo(){
    const nombre="Juan"; 
    const apellido="angel";
    const correo="angel.juan@asdas.com";
    const cargo="operario";

    return (
        <Box alignItems="center" justifyContent="center">
                  <Typography component="div" variant="h6">
                    Nombre 
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {nombre}
                </Typography>
                  <Typography component="div" variant="h6">
                     Apellido
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {apellido}
                  </Typography>
                  <Typography component="div" variant="h6">
                     Correo
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {correo}
                  </Typography>
                  <Typography component="div" variant="h6">
                     Cargo
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {cargo}
                  </Typography>

        </Box>);
}