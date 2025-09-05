const express = require('express');
const router = express.Router();
const Adm = require('../models/adm');

// Exibe página de login
router.get('/', (req, res) => {
  res.render('login'); // views/login.hbs
});

// Faz login
router.post('/', async (req, res) => {
  const { login, senha } = req.body;

  const user = await Adm.findOne({ where: { login, senha } });
  if (user) {
    req.session.user = user.dataValues; // salva sessão
    res.redirect('/admin');
  } else {
    res.render('login', { error: 'Usuário ou senha inválidos' });
  }
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;
