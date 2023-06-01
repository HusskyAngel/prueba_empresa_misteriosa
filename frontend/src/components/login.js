import LoginFields from './auxcomps/loginFields'
import LoginAlert from './auxcomps/loginAlert'
import Box from '@mui/material/Box';
function Login(props){
    return( 
    <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
              <h1 className='title-container'>
                 Gestión de Inventario
              </h1>
            </Box>
            <LoginAlert alert={props.alert}/>
            <LoginFields/>
    </div>)
}


export default Login;
