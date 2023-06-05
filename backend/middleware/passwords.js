import bcrypt from 'bcrypt';


function encrypt(password){
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

function decrypt(password,hash){
    return bcrypt.compareSync(password, hash);
}

export {encrypt,decrypt};
