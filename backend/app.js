var express = require('express');
var cors = require('cors');
var app =express();
const bodyParser = require('body-parser');

app.use(cors())
app.use(express.static('static'));
app.use(bodyParser.json());


const todos = [
    {
        id:1,
        text: 'Walk the dog'
    },

    {
        id: 2,
        text: 'Go to the gym'
    }
];

app.get('/api/todos', (req, res) => {
    const metadata = {total_count: todos.length};
    res.json({_metadata: metadata, records: todos})
})

app.post('/api/todos', (req, res) => {
    const newTodo = req.body;
    newTodo.id = todos.length +1 ;

    todos.push(newTodo);
    res.json(newTodo);

})

app.listen(8080, () => {
    console.log('App started on port 8080');
});