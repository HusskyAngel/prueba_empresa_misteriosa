module.exports= (sequelize,DataTypes)=> {
  return sequelize.define('Admin', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      usuario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contrasena: {
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

