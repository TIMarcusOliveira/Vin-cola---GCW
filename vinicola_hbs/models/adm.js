const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Adm = sequelize.define('adm', {
  login: DataTypes.STRING,
  senha: DataTypes.STRING
}, { timestamps: false, freezeTableName: true });

module.exports = Adm;
