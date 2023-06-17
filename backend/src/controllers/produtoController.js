const Produto = require("../models/produto");

const ProdutoController = {
  listarProdutos: async (req, res) => {
    console.log("chegou na lista");
    try {
      const produtos = await Produto.findAll();
      // res.json([{ id: 1, nome: "Bola", quantidade: 1, valor: 10 }]);
      res.json(produtos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao listar os produtos" });
    }
  },

  criarProduto: async (req, res) => {
    const { nome, quantidade, valor } = req.body;
    console.log(req.body);
    try {
      const newProduct = await Produto.create({
        nome,
        quantidade,
        valor,
      });
      console.log(newProduct);
      res.json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar o produto" });
    }
  },

  atualizarProduto: async (req, res) => {
    const { id } = req.params;
    const { tipoAcao } = req.body;
    console.log(req.params);
    console.log(req.body);
    try {
      const produto = await Produto.findByPk(id);

      if (!produto) {
        return res.status(404).json({ error: "Produto não encontrado" });
      }
      if (produto.quantidade == 0 && tipoAcao == 2) {
        /*
          Caso a quantidade seja 0, não será permitido diminuir mais.
        */
        return res
          .status(400)
          .json({ error: "A quantidade mínima já foi atingida" });
      }
      if (tipoAcao == 1) {
        produto.quantidade++;
      } else if (produto.quantidade != 0) {
        produto.quantidade--;
      }

      await produto.save();
      res.json(produto);
    } catch (error) {}
  },
};
module.exports = ProdutoController;
