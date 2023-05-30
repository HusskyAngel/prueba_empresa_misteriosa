module.exports= (sequelize,DataTypes)=> {
  return sequelize.define('Operario', {
  // Define your model's attributes here
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      usuario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      constrasena: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cc: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      foto: {
        type: DataTypes.STRING,
      },
  });
}

