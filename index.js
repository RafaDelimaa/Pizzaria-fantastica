// importar Express
const express = require("express");
// Importando o roteador
const PizzasRouter = require("./routers/PizzasRouter");
// Criar o servidor
const app = express();
// Criar a rota respondendo a requisição
app.use('/', PizzasRouter);
// Configurar o View engine para EJS
app.set("view engine", "ejs");
// essa linha só é necessaria caso precise renomear a pasta ou mudar a rota
app.set('views', './views');
// Levantando o servidor
app.listen(3000, ()=>{
    console.log("servidor rodando...")
});
