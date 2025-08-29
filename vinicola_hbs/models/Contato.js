const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Contato = sequelize.define('contato', {
  texto: DataTypes.STRING,
  foto: DataTypes.STRING,
  mapa: DataTypes.STRING
}, { timestamps: false, freezeTableName: true });

module.exports = Contato;
