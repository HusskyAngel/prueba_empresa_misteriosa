import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path:'.env' });

const dbUser =process.env.POSTGRES_USER;
const dbName =process.env.POSTGRES_DB;
const dbPassword = process.env.POSTGRES_PASSWORD;
const dbIp=process.env.POSTGRES_IP;
const dbPort=process.env.POSTGRES_PORT;

const sequelize = new Sequelize('postgres://'+dbUser+':'+dbPassword+'@'+dbIp+':'+dbPort+'/'+dbName)

// Check if the connection is established
async function testConnection(){
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}
export default sequelize;
