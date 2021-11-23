// importar Express
const express = require("express");
// Importando o roteador

const PizzasRouter = require("./routers/PizzasRouter");
// Criar o servidor
const app = express();
// Criar a rota respondendo a requisição
app.use('/', PizzasRouter);
// Levantando o servidor
app.listen(3000, ()=>{
    console.log("servidor rodando...")
});
