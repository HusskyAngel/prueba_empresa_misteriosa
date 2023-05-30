import Router from 'express';
import db from '../../db/dbmodels/db'

const router =Router();

router.post('/login', (req,res)=>{
   const {usuario,contrasena,tipo} =req.body; 
    if (tipo =="oper"){
        db.operario.findOne({where:{usuario:usuario, constrasena:contrasena},})
            .then((usuario)=> {
                
            })
            .catch((error)=>{

            })
    }else{
        db.admin.findOne({where:{usuario:usuario, constrasena:contrasena},})
            .then((usuario)=> {
                
            })
            .catch((error)=>{

            })
    }
});
