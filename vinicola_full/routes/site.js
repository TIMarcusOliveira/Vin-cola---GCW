const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
  db.query("SELECT * FROM inicio LIMIT 1", (err, result) => {
    if (err) throw err;
    const conteudo = result.length > 0 ? result[0] : {titulo:'', texto:'', botao:''};
    res.render('inicio', { conteudo });
  });
});

router.get('/sobre', (req, res) => {
  db.query("SELECT * FROM sobre", (err, result) => {
    if (err) throw err;
    res.render('sobre', { conteudo: result });
  });
});

router.get('/produtos', (req, res) => {
  db.query("SELECT * FROM produtos", (err, result) => {
    if (err) throw err;
    res.render('produtos', { conteudo: result });
  });
});

router.get('/contato', (req, res) => {
  db.query("SELECT * FROM contato", (err, result) => {
    if (err) throw err;
    res.render('contato', { conteudo: result });
  });
});

module.exports = router;
