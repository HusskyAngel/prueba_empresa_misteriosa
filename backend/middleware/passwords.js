import bcrypt from 'bcrypt';


function encrypt(password){
    return bcrypt.hash(password, 10);
}

function decrypt(password,hash){
    return bcrypt.compare(password, hash);
}

export {encrypt,decrypt};
