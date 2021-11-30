const pizzas = require('../database/Pizzas.json')
const controller = {
    listar: (req, res)=> {
        return res.render('index',{pizzas, busca: ""})
        // res.send(pizzas)
    },
    getPizza: (req, res) => {
        let idPizza = req.params.id;
        let pizza = pizzas.find(pizzas=> pizzas.id == idPizza)
        res.render('pizza', {pizza});
        // criar um if/else caso não tenha a pizza
    }
}

module.exports = controller;