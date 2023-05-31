import LoginFields from './auxcomps/loginFields'
import LoginAlert from './auxcomps/loginAlert'

function Login(props){
    return( 
    <div>
    <div>
      <h1 className='title-container'>
        Gestión de inventario
      </h1>

    </div>
            <LoginAlert alert={props.alert}/>
            <LoginFields/>
    </div>)
}


export default Login;
