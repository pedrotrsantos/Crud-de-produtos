import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Container, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Api from "./Api";
import Alert from "@mui/material/Alert";

const App = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    try {
      Api.get("produtos").then((res) => {
        setProdutos(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const addQuantidade = async (produtoLinha) => {
    const parametro = { tipoAcao: 1 };

    try {
      await Api.put(`produtos/${produtoLinha.id}`, parametro).then((res) => {
        if (res.data) {
          const produtosAtualizados = produtos.map((produto) => {
            if (produtoLinha.id === produto.id) {
              produto.quantidade++;
            }
            return produto;
          });
          setProdutos(produtosAtualizados);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const subQuantidade = async (produtoLinha) => {
    const parametro = { tipoAcao: 2 };

    try {
      await Api.put(`produtos/${produtoLinha.id}`, parametro).then((res) => {
        if (res.data) {
          const produtosAtualizados = produtos.map((produto) => {
            if (produtoLinha.id === produto.id) {
              produto.quantidade--;
            }
            return produto;
          });
          setProdutos(produtosAtualizados);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await Api.post("produtos", data).then((res) => {
        const novoProduto = { ...data, id: res.data.id };
        setProdutos([...produtos, novoProduto]);
        reset();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          height: { xs: "100%", md: "80%" },
          width: "100%",
          padding: "24px",
          borderRadius: "16px",
          backgroundColor: "#ffffff",
        }}
      >
        <Box
          sx={{
            fontSize: "h4.fontSize",
            fontWeight: "bold",
            textAlign: "center",
            mb: 3,
          }}
        >
          Sistema de cadastro de produtos em estoque
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mb: "24px" }}
        >
          <Box sx={{ mb: 1 }}>
            <TextField
              id="outlined-basic"
              label="Nome do produto"
              variant="outlined"
              fullWidth
              error={errors.nome ? true : false}
              helperText={
                errors.nome ? "Você precisa definir o nome do produto" : ""
              }
              {...register("nome", { required: true })}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Box sx={{ width: "50%" }}>
              <TextField
                id="outlined-basic"
                label="Quantidade"
                variant="outlined"
                type="number"
                fullWidth
                error={errors.quantidade ? true : false}
                helperText={
                  errors.quantidade
                    ? "Você precisa definir a quantidade do produto"
                    : ""
                }
                {...register("quantidade", { required: true })}
              />
            </Box>
            <Box sx={{ width: "50%", ml: 1 }}>
              <TextField
                id="outlined-basic"
                label="Valor"
                variant="outlined"
                type="number"
                fullWidth
                error={errors.valor ? true : false}
                helperText={
                  errors.valor ? "Você precisa definir o valor do produto" : ""
                }
                {...register("valor", { required: true })}
              />
            </Box>
          </Box>

          <Box sx={{ textAlign: "right" }}>
            <Button variant="contained" type="submit">
              Adicionar produto
            </Button>
          </Box>
        </Box>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }}>
            <TableHead>
              <TableRow>
                <TableCell>Nome do produto</TableCell>
                <TableCell align="right">Quantidade em estoque</TableCell>
                <TableCell align="right">Valor (R$)</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {produtos.map((produto) => (
                <TableRow
                  key={produto.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{produto.nome}</TableCell>
                  <TableCell align="right">{produto.quantidade}</TableCell>
                  <TableCell align="right">{produto.valor}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="text"
                      color="success"
                      onClick={() => addQuantidade(produto)}
                    >
                      Adicionar
                    </Button>
                    <Button
                      variant="text"
                      color="error"
                      onClick={() => subQuantidade(produto)}
                    >
                      Remover
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default App;
