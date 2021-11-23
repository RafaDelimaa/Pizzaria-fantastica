const pizzas = require('../database/Pizzas.json')
const controller = {
    listar: (req, res)=> {
        res.send(pizzas)
    },
    getPizza: (req, res) => {
        let idPizza = req.params.id;
        let saborPizza = pizzas.find(pizzas=> pizzas.id == idPizza)
        res.render('pizza', {saborPizza});
    }
}

module.exports = controller; 