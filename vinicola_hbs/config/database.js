const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("vinicola", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
