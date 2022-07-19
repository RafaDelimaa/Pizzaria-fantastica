const db = require('../model/db')
const pizzas = db.Mongoose.model('pizzas', db.PizzaSchema, 'pizzas');



const getAll = async (req, res) => {
    const list = await pizzas.find();
    return res.status(200).json({
        data: list,
        count: list.length
    });
}

const getById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json('Invalid request params');
    }

    console.log('>>>id', id);

    const pizza = await pizzas.findById({ _id: `${id}` })
    if (pizza) {
        return res.status(200).json(pizza);
    }
    return res.status(400).json('Could not fetch the pizza');
}

const update = (req, res) => {
    const { id } = req.params;
    const { nome, ingredientes } = req.body;

    try {
        if (!id) return res.status(400).json({ message: 'Invalid request params' });

        if (nome == '' || ingredientes == '' || ingredientes.length == 0) {
            return res.status(400).json({ message: 'Invalid request body' });
        }

        const filter = { _id: `${id}` };
        const update = { nome, ingredientes };
        const pizza = pizzas.findByIdAndUpdate(filter, update)
        if (pizza) {
            return res.status(201).json({
                message: 'Pizza updated',
                data: pizza
            });
        } else {
            return res.status(404).json({ message: 'Could not update the pizza', error: err });
        }
    } catch (err) {
        return res.status(500).json({ message: 'ERROR ' + err });
    }
};

const create = async (req, res) => {
    const {nome, ingredientes} = req.body;

    try {
        if (nome == '' || ingredientes == '' || ingredientes.length == 0) {
            return res.status(400).json({ message: 'Invalid request body' });
        }

        const pizza = pizzas.create({ nome, ingredientes})
        if (pizza) {
            return res.status(200).json({
                message: 'Pizza created',
                data: pizza
            });
        } else {
            return res.status(404).json({ message: 'Could not created the pizza', error: err });
        }

    } catch (err) {
        return res.status(500).json({ message: 'ERROR ' + err });
    };
}

const deleteById = (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(400).json({ message: 'Invalid request params' });

    const filter = { _id: `${id}` };
    try {
        const pizza = pizzas.findOneAndDelete(filter)
        if (pizza) {
            return res.status(200).json({
                message: 'pizza deleted',
                data: pizza
            });
        } else {
            return res.status(404).json({ message: 'Could not fetch the pizza', error: err });
        }

    } catch (err) {
        return res.status(500).json({ message: 'ERROR ' + err });
    }
};


module.exports = { getAll, getById, update, create, deleteById }