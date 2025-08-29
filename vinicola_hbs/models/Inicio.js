const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Inicio = sequelize.define('inicio', {
  titulo: DataTypes.STRING,
  texto: DataTypes.STRING,
  botao: DataTypes.STRING
}, { timestamps: false, freezeTableName: true });

module.exports = Inicio;
