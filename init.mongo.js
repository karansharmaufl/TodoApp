db = new Mongo().getDB('todos');
db.todos.remove({});

db.todos.insert([
    {
        text: 'Walk the dog',
        completed: true,
    
    },

    {
        text: 'Take the test',
        completed: false,
    
    },

    {
        text: 'Do the dishes',
        completed: true,
    
    },

    {
        text: 'Do the laundry',
        completed: false,
    
    },

    {
        text: 'Wake up on time',
        completed: true,
    
    },

]);