const express = require('express');
const router = express.Router();

const Inicio = require('../models/Inicio');
const Sobre = require('../models/Sobre');
const Produto = require('../models/Produto');
const Contato = require('../models/Contato');

router.get('/', (req, res) => res.render('admin/index'));

// Início
router.get('/inicio', async (req, res) => {
  const conteudo = await Inicio.findOne();
  res.render('admin/inicio', { conteudo: conteudo?.dataValues });
});

router.post('/inicio', async (req, res) => {
  const { id, titulo, texto, botao } = req.body;
  await Inicio.update({ titulo, texto, botao }, { where: { id } });
  res.redirect('/admin/inicio');
});

// Sobre
router.get('/sobre', async (req, res) => {
  const conteudo = await Sobre.findAll();
  res.render('admin/sobre', { conteudo: conteudo.map(c => c.dataValues) });
});

router.post('/sobre', async (req, res) => {
  for (const id in req.body) {
    await Sobre.update({ texto: req.body[id] }, { where: { id } });
  }
  res.redirect('/admin/sobre');
});

// Produtos
router.get('/produtos', async (req, res) => {
  const conteudo = await Produto.findAll();
  res.render('admin/produtos', { conteudo: conteudo.map(p => p.dataValues) });
});

router.post('/produtos', async (req, res) => {
  for (const id in req.body) {
    await Produto.update(req.body[id], { where: { id } });
  }
  res.redirect('/admin/produtos');
});

// Contato
router.get('/contato', async (req, res) => {
  const conteudo = await Contato.findAll();
  res.render('admin/contato', { conteudo: conteudo.map(c => c.dataValues) });
});

router.post('/contato', async (req, res) => {
  for (const id in req.body) {
    const { texto, foto } = req.body[id]; // pega cada campo
    await Contato.update({ texto, foto }, { where: { id } });
  }
  res.redirect('/admin/contato');
});


module.exports = router;
