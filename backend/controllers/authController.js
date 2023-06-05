import  '../db/dbconnection/db_mongo_conn.js';
import db from  '../db/dbmodels/db.js';
import  {generateAccesToken}  from '../middleware/jwt.js'; 
import bcrypt from 'bcrypt';

async function getGjson(user){
    let usr=await db.User.findOne({uuid: user.id});
    return usr.geoJSONs;
}

async function login(req,res){
    const {correo,contrasena,tipo} =req.body; 
    console.log(req.body);
    let searcher={};
    if (tipo=="oper")
        searcher=db.operario;
    else 
        searcher=db.admin;

    await searcher.findOne({where:{correo:correo},})
        .then(async (usr)=> {
            bcrypt.compareSync(contrasena,usr.contrasena,(error,result)=>{
                if (result){
                    let token =generateAccesToken(usr.id)
                    res.header('authorization',token).
                    res.json({
                        message: 'usuario autenticado',
                        token: token,
                        user: usr,
                        markers: getGjson(usr)} )
                }
                else{
                    res.send({ message: 'invalid password or email'});
                }
            }); 
        })
        .catch((error)=>{
            res.send('User not found');
        })

}


export default  login;
