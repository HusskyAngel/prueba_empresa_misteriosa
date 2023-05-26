const dotenv =require('dotenv');
const path = require('path');
const mongoose = require('mongoose');

const envPath = path.resolve(__dirname, '../../../.env'); 
dotenv.config({ path: envPath });

const dbUser=process.env.MONGO_USER;
const dbPassword=process.env.MONGO_PASSWORD;
const dbName=process.env.MONGO_DB;
const dbIp=process.env.MONGO_IP;
const dbPort=process.env.MONGO_PORT;



async function testConnection(){
    //const connectionString ='mongodb://'+dbIp+':'+dbPort+'/'+dbName;
    const connectionString ='mongodb://'+dbIp+':'+dbPort+'/'+dbName;
    try{
          let client = await mongoose.connect(connectionString, {
              authSource: "admin",
          } );
        console.log("connection created ")
        
    }catch(error){
        console.error('Unable to connect to the database:', error);
    }
}
testConnection()
