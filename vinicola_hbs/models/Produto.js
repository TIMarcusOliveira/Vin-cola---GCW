const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('produtos', {
  imagem: DataTypes.STRING,
  titulo: DataTypes.STRING,
  descricao: DataTypes.STRING,
  preco: DataTypes.STRING
}, { timestamps: false, freezeTableName: true });

module.exports = Produto;
