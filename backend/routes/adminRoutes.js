import {Router} from 'express';
import {adminCreate} from '../controllers/adminController.js';

const adminRouter=Router();

adminRouter.post('/adminCreate',adminCreate); 

export default adminRouter;
