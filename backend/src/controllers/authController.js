import generateAccesToken from '../middleware/jwt'
 
async function verifyUser(req,res){
    const {usuario,contrasena,tipo} =req.body; 
    if (tipo =="oper"){
        await db.operario.findOne({where:{usuario:usuario},})
            .then((usr)=> {
                bcrypt.compare(contrasena,usr.contrasena,(error,result)=>{
                    if (result){
                        let token =generateAccesToken(usr.id)
                        res.send({message: 'user authenticated' , id });
                    }
                    else{
                        res.send({ message: 'invalid password'});
                    }
                }); 
            })
            .catch((error)=>{
                res.send('User not found');
            })
    }else if (tipo =="admin"){
        await db.admin.findOne({where:{usuario:usuario},})
            .then((usr)=> {
                bcrypt.compare(contrasena,usr.contrasena,(error,result)=>{
                    if (result){
                        let token =generateAccesToken(usr.id)
                        res.send({message: 'admin authenticated' , id });
                    }
                    else{
                        res.send({ message: 'invalid password'});
                    }
                }); 
            })
            .catch((error)=>{
                res.send('admin not found');
            })
    }
}


module.exports=verifyUser
