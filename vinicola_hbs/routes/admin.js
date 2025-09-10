const express = require("express");
const session = require("express-session");
const router = express.Router();

const Inicio = require("../models/Inicio");
const Sobre = require("../models/Sobre");
const Produto = require("../models/Produto");
const Contato = require("../models/Contato");

const upload = require("../config/upload");

function authMiddleware(req, res, next) {
  if (req.session && req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
}

// Todas as rotas admin agora exigem login
router.use(authMiddleware);

router.get("/", (req, res) => res.render("admin/index"));

// Início
router.get("/inicio", async (req, res) => {
  const conteudo = await Inicio.findOne();
  res.render("admin/inicio", { conteudo: conteudo?.dataValues });
});

router.post("/inicio", async (req, res) => {
  const { id, titulo, texto, botao } = req.body;
  await Inicio.update({ titulo, texto, botao }, { where: { id } });
  res.redirect("/admin/");
});

// Sobre
router.get("/sobre", async (req, res) => {
  const conteudo = await Sobre.findAll();
  res.render("admin/sobre", { conteudo: conteudo.map((c) => c.dataValues) });
});

router.post(
  "/sobre",
  upload.fields([
    { name: "imagem1", maxCount: 1 },
    { name: "imagem2", maxCount: 1 },
  ]),
  async (req, res) => {
    const { id, texto } = req.body;

    const dados = { texto };

    // Se enviou imagem nova, atualiza
    if (req.files["imagem1"]) {
      dados.imagem1 = "/img/" + req.files["imagem1"][0].filename;
    }
    if (req.files["imagem2"]) {
      dados.imagem2 = "/img/" + req.files["imagem2"][0].filename;
    }

    await Sobre.update(dados, { where: { id } });
    res.redirect("/admin/sobre");
  }
);

// Produtos
// Produtos
router.get("/produtos", async (req, res) => {
  const conteudo = await Produto.findAll();
  res.render("admin/produtos", { conteudo: conteudo.map((p) => p.dataValues) });
});

router.post(
  "/produtos",
  upload.any(), // permite múltiplos arquivos
  async (req, res) => {
    const body = req.body;

    // req.files é um array: [{ fieldname, filename, ...}, ...]
    const filesMap = {};
    req.files.forEach((file) => {
      filesMap[file.fieldname] = "/img/" + file.filename;
    });

    // Percorre cada produto enviado
    for (const id in body) {
      const { titulo, preco, descricao } = body[id];

      const dados = { titulo, preco, descricao };

      // Se mandou imagem para esse produto, atualiza
      if (filesMap[`imagem_${id}`]) {
        dados.imagem = filesMap[`imagem_${id}`];
      }

      await Produto.update(dados, { where: { id } });
    }

    res.redirect("/admin/produtos");
  }
);

// Contato
router.get("/contato", async (req, res) => {
  const conteudo = await Contato.findAll();
  res.render("admin/contato", { conteudo: conteudo.map((c) => c.dataValues) });
});

router.post("/contato", upload.single("foto"), async (req, res) => {
  const { id, texto } = req.body;

  const dados = { texto };

  // só atualiza foto se veio arquivo novo
  if (req.file) {
    dados.foto = "/img/" + req.file.filename;
  }

  await Contato.update(dados, { where: { id } });
  res.redirect("/admin/");
});

module.exports = router;
