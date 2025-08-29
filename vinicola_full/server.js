const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
const siteRoutes = require('./routes/site');
app.use('/', siteRoutes);

const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
