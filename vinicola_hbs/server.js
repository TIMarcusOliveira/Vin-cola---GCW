const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

const app = express();

// Handlebars setup
app.engine('hbs', exphbs.engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
const siteRoutes = require('./routes/site');
const adminRoutes = require('./routes/admin');
app.use('/', siteRoutes);
app.use('/admin', adminRoutes);

// Testa conexão
sequelize.authenticate().then(() => console.log("Conectado ao MySQL via Sequelize"));

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
