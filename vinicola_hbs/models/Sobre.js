const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Sobre = sequelize.define('sobre', {
  texto: DataTypes.STRING,
  imagem1: DataTypes.STRING,
  imagem2: DataTypes.STRING
}, { timestamps: false, freezeTableName: true });

module.exports = Sobre;
