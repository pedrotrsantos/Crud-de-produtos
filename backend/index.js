const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
var path = require("path");
const bodyParser = require("body-parser");
const produtoRoutes = require("./src/routes/produtoRoutes");

// app.use(express.json());
app.use(cors());

// app.get("/produtos", (req, res) => {
//   res.json([{ id: 1, nome: "Bola", quantidade: 1, valor: 10 }]);
// });

app.use(bodyParser.json());
app.use("/produtos", produtoRoutes);
app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
