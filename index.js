// importar Express
const express = require("express");

// Importando o roteador
const PizzasRouter = require("./routers/PizzasRouter");

// Criar o servidor
const app = express();

app.use(express.json());
// Configurar o View engine para EJS
app.set("view engine", "ejs");
// essa linha só é necessaria caso precise renomear a pasta ou mudar a rota
app.set('views', './views');

//confgurar a pasta public
app.use(express.static(__dirname + '/public'));

// Criar a rota respondendo a requisição
app.use('/', PizzasRouter);


// Levantando o servidor
app.listen(3000, ()=>{
    console.log("servidor rodando...")
});
