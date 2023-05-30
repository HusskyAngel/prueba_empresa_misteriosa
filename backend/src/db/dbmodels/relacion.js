module.exports=(sequelize,DataTypes)=>{
    return sequelize.define('Relacion',{
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      }
    });
}
