const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
  res.render('admin_index');
});

// INICIO
router.get('/inicio', (req, res) => {
  db.query("SELECT * FROM inicio LIMIT 1", (err, result) => {
    if (err) throw err;
    const conteudo = result.length > 0 ? result[0] : {id:0,titulo:'',texto:'',botao:''};
    res.render('admin_inicio', { conteudo });
  });
});

router.post('/inicio', (req, res) => {
  const { id, titulo, texto, botao } = req.body;
  db.query("UPDATE inicio SET titulo=?, texto=?, botao=? WHERE id=?", 
    [titulo, texto, botao, id], (err) => {
    if (err) throw err;
    res.redirect('/admin/inicio');
  });
});

// SOBRE
router.get('/sobre', (req, res) => {
  db.query("SELECT * FROM sobre", (err, result) => {
    if (err) throw err;
    res.render('admin_sobre', { conteudo: result });
  });
});

router.post('/sobre', (req, res) => {
  const updates = req.body;
  Object.keys(updates).forEach(id => {
    db.query("UPDATE sobre SET texto=? WHERE id=?", [updates[id], id]);
  });
  res.redirect('/admin/sobre');
});

// PRODUTOS
router.get('/produtos', (req, res) => {
  db.query("SELECT * FROM produtos", (err, result) => {
    if (err) throw err;
    res.render('admin_produtos', { conteudo: result });
  });
});

router.post('/produtos', (req, res) => {
  const updates = req.body;
  Object.keys(updates).forEach(id => {
    db.query("UPDATE produtos SET titulo=?, preco=? WHERE id=?", 
      [updates[id].titulo, updates[id].preco, id]);
  });
  res.redirect('/admin/produtos');
});

// CONTATO
router.get('/contato', (req, res) => {
  db.query("SELECT * FROM contato", (err, result) => {
    if (err) throw err;
    res.render('admin_contato', { conteudo: result });
  });
});

router.post('/contato', (req, res) => {
  const updates = req.body;
  Object.keys(updates).forEach(id => {
    db.query("UPDATE contato SET texto=? WHERE id=?", [updates[id], id]);
  });
  res.redirect('/admin/contato');
});

module.exports = router;
