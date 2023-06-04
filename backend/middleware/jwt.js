import jwt from 'jsonwebtoken'; 
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const  jwtPass=process.env.JWT_PASS;

function generateAccesToken(id){
    return jwt.sing({id: id},jwtPass,{expiresIn: '20m'});
}

function validateToken(req,res,next){
    const accesToken=req.headers['authorization'] || req.query.accesToken;
    if(!accesToken) res.send({message:'denied'}); 
    jwt.verify(accesToken,process.env.JWT_PASS,(err,usuario)=>{
        if(err){
            res.send({message:'denied'})
        }else{
            req.usuario=usuario
            next()
        }
    })
}

export {generateAccesToken,validateToken};
