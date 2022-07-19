const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://devJr:rafa1995@cluster0.mhqhn.mongodb.net/db-pizzaria-fantastica?retryWrites=true&w=majority');


const pizzaSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    ingredientes: Array,
}, { collection: 'pizzas' }
);



module.exports = { Mongoose: mongoose, PizzaSchema: pizzaSchema }

