const express = require('express');
const router = express.Router();

const Inicio = require('../models/Inicio');
const Sobre = require('../models/Sobre');
const Produto = require('../models/Produto');
const Contato = require('../models/Contato');

router.get('/', async (req, res) => {
  const conteudo = await Inicio.findOne();
  res.render('inicio', { conteudo: conteudo?.dataValues });
});

router.get('/sobre', async (req, res) => {
  const conteudo = await Sobre.findAll();
  res.render('sobre', { conteudo: conteudo.map(c => c.dataValues) });
});

router.get('/produtos', async (req, res) => {
  const conteudo = await Produto.findAll();
  res.render('produtos', { conteudo: conteudo.map(p => p.dataValues) });
});

router.get('/contato', async (req, res) => {
  const conteudo = await Contato.findAll();
  res.render('contato', { conteudo: conteudo.map(c => c.dataValues) });
});

module.exports = router;
