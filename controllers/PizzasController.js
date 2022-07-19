const pizzas = require('../database/Pizzas.json')


const controller = {
    listar: (req, res) => {
        return res.render('index', { pizzas, busca: "" })
        // res.send(pizzas)
    },
    getPizza: (req, res) => {
        let idPizza = req.params.id;
        let pizza = pizzas.find(pizzas => pizzas.id == idPizza)
        res.render('pizza', { pizza });
        // criar um if/else caso não tenha a pizza
    },
    busca: (req, res) => {
        // . trim() remove os espaços em excesso da barra de pesquisa
        const nomePizza = req.query.q.trim();
        // .filter busca dentro da string palavras chaves// porém o .includes faz com que a busca encontre letras relacionadas
        const pizzasFiltras = pizzas.filter(pizzas => pizzas.nome.toUpperCase().includes(nomePizza.toUpperCase()))
        res.render('index', { pizzas: pizzasFiltras, busca: nomePizza })
    }
}

module.exports = controller;