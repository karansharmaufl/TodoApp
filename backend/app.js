var express = require('express');
var cors = require('cors');
var app =express();
const bodyParser = require('body-parser');

app.use(cors())
app.use(express.static('static'));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
let db;



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
    db.collection('todos').find().toArray()
        .then(todos => {
            const metadata = {total_count: todos.length};
            res.json({_metadata: metadata, records: todos})
        }).catch(error => {
            console.log(error);
            res.status(500).json({ message: `Internal Server Error: ${error}` });
          });
    
})

app.post('/api/todos', (req, res) => {
    const newTodo = req.body;
    db.collection('todos').insertOne(newTodo).then(result =>
        db.collection('todos').find({ _id: result.insertedId }).limit(1).next()
      ).then(newTodo => {
        res.json(newTodo);
      }).catch(error => {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error: ${error}` });
      });
    });



MongoClient.connect('mongodb://localhost/todos').then(connection => {
    db = connection;
    app.listen(8080, () => {
        console.log('App started on port 8080');
    })
}).catch(error => {
    console.log('ERROR:',error);
});

// app.listen(8080, () => {
//     console.log('App started on port 8080');
// });