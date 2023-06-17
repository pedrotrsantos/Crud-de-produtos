const express = require("express");
const router = express.Router();
const cors = require("cors");
const ProdutoController = require("../controllers/produtoController");
router.use(cors());

router.get("/", ProdutoController.listarProdutos);
// router.get("/", (req, res) => {
//   res.json([{ id: 1, nome: "Bola", quantidade: 1, valor: 10 }]);
// });

router.post("/", ProdutoController.criarProduto);

router.put("/:id", ProdutoController.atualizarProduto);

module.exports = router;
