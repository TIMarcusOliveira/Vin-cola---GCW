const multer = require("multer");
const path = require("path");

// configura onde salvar e o nome do arquivo
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img"); // pasta onde salvar
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // exemplo: 16938692929.png
  },
});

const upload = multer({ storage });

module.exports = upload;
