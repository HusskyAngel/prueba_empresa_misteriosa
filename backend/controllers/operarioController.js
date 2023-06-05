import db from  '../db/dbmodels/db.js';
import {encrypt} from '../middleware/passwords.js'

async function adminCreate( req,res){
    const {usuario,contrasena,cc,nombre,apellido,correo,foto}=req.body;
    const newAdmin= new db.operario({
        usuario:usuario,
        contrasena: encrypt(contrasena),
        cc:cc,
        nombre:nombre,
        apellido:apellido,
        correo:correo,
        foto:foto
    })  
    await newAdmin.save()
    console.log("admin guardado con exito")
}

