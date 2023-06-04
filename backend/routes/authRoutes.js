import  login  from '../controllers/authController.js';
import {Router} from  'express';
import {validateToken} from '../middleware/jwt.js';

const loginRouter =Router();
console.log(login)
loginRouter.post('/login',validateToken,login);

export default loginRouter;
