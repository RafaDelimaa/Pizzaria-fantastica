// como criar um roteadro
//import express
const express = require("express");

// importar o PizzasController
const PizzasController = require('../controllers/PizzasController');

//Criar roteador
const router = express.Router();

//Definir rotas às quais ele responde
router.get('/', PizzasController.listar);
router.get('/busca', PizzasController.busca);
router.get('/pizzas', PizzasController.listar);
router.get('/pizzas/:id', PizzasController.getPizza);
// Expostar o roteador
module.exports = router;