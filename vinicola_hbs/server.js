const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const session = require('express-session');
const app = express();

app.use(express.urlencoded({ extended: true }));

//segurança sessao
app.use(session({
  secret: 'process.env.SESSION_SECRET', // tipo uma criptografia do cookie p nn falsificarem 
  resave: false,
  saveUninitialized: false
}));

// Handlebars setup
app.engine('hbs', exphbs.engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// rotas
const loginRoutes = require('./routes/login');
const adminRoutes = require('./routes/admin');

app.use('/login', loginRoutes);
app.use('/admin', adminRoutes);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
const siteRoutes = require('./routes/site');

app.use('/', siteRoutes);
app.use('/admin', adminRoutes);

// Testa conexão
sequelize.authenticate().then(() => console.log("Conectado ao MySQL via Sequelize"));

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
