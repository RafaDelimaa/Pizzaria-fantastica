// como criar um roteadro
//import express
const express = require("express");
const controller = require("../controllers/PizzasController");

// importar o PizzasController
const PizzasController = require('../controllers/PizzasController');
const PizzaControllerNew = require('../controllers/pizza-controller')

//Criar roteador
const router = express.Router();

//Definir rotas às quais ele responde
router.get('/', PizzasController.listar);
router.get('/busca', PizzasController.busca);
router.get('/pizzas', PizzasController.listar);
router.get('/pizzas/:id', PizzasController.getPizza);


router.get('/api/v1/pizzas', PizzaControllerNew.getAll)
router.get('/api/v1/pizzas/:id', PizzaControllerNew.getById)
router.put('/api/v1/pizzas/:id', PizzaControllerNew.update)
router.delete('/api/v1/pizzas/:id', PizzaControllerNew.deleteById)
router.post('/api/v1/pizzas', PizzaControllerNew.create)

// Expostar o roteador
module.exports = router;