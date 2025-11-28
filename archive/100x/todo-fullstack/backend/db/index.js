const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:1234@cluster0.jsqhj.mongodb.net/todo');

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todos = mongoose.model('Todos', TodoSchema)


module.exports = {
    Todos
};
