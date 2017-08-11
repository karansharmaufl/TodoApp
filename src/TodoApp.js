import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
var createReactClass = require('create-react-class');

var TodoApp = createReactClass ({
  getInitialState(){
      return{
        todos: [
          {
            id: 1,
            text: 'Walk the dog'
          },
          {
            id: 2,
            text: 'Clean the yard'
          }
        ]
      };
  },

  handleAddTodo(text){
    alert('new todo: '+text);
  },
  render() {
    var {todos} = this.state;
    return (
      <div className="App">
        <TodoList todos={todos}/>
        <TodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

export default TodoApp;
