import sequelize from '../dbconnection/db_postgres_conn.js';
import {Sequelize,DataTypes} from 'sequelize';
import {GeoJSON, User} from './markers.js';
import admin from './admin.js'
import operario from './operario.js'

const db={} 
db.sequelize=sequelize;
db.Sequelize=Sequelize;
db.admin=admin(db.sequelize,DataTypes);
db.operario=operario(db.sequelize,DataTypes);

db.GeoJson=GeoJSON
db.User=User

//sync 
db.sequelize.sync({force:true});

export default db;
