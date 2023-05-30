const sequelize=require('../dbconnection/db_postgres_conn')
const {Sequelize,DataTypes}=require('sequelize');


const db={} 
db.sequelize=sequelize;
db.Sequelize=Sequelize;
db.admin=require('./admin')(db.sequelize,DataTypes);
db.operario=require('./operario')(db.sequelize,DataTypes);
db.relacion=require('./relacion')(db.sequelize,DataTypes);
//llaves foraneas 
db.admin.hasMany(db.relacion);
db.operario.hasOne(db.relacion);

//sync 
db.sequelize.sync({force:true});

module.exports=createDB();
