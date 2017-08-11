import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import TodoSearch from './TodoSearch.jsx';
var createReactClass = require('create-react-class');

var TodoApp = createReactClass ({
  getInitialState(){
      return{
        showCompleted: false,
        searchText: '',
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

  handleSearch(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render() {
    var {todos} = this.state;
    return (
      <div className="App">
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <TodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

export default TodoApp;
