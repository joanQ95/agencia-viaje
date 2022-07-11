const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('trip', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    location:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    availability:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  },{
    timestamps: false,
  });
};
