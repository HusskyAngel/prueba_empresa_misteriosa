import Router from 'express';
import verifyUser from '../../controllers/authController'

const router =Router();

router.post('/login', (req,res)=>{
    let usr= 
    verifyUser(req,res);    
});
