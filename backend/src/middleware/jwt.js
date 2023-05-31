import jwt from 'jsonwebtoken'; 
import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, '../../.env'); 
dotenv.config({ path: envPath });

const  jwtPass=process.env.JWT_PASS;

function generateAccesToken(id){
    return jwt.sing(id,jwtPass,{expiresIn: '20m'});
}

module.exports=generateAccesToken;
