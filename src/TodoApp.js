import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import TodoSearch from './TodoSearch.jsx';
import TodoApi from './api/TodoApi.jsx';
var uuid = require('node-uuid');
var createReactClass = require('create-react-class');

var TodoApp = createReactClass ({
  getInitialState(){
      return{
        showCompleted: false,
        searchText: '',
        todos: [
          {
            id: uuid(),
            text: 'Walk the dog',
            completed: true

          },
          {
            id: uuid(),
            text: 'Clean the yard',
            completed: false
          },
          {
            id: uuid(),
            text: 'Eat',
            completed: true

          },
          {
            id: uuid(),
            text: 'Sleep',
            completed: false
          }
        ]
      };
  },

  handleAddTodo(text){
    this.setState({
       todos:[
         ...this.state.todos,{
           id: uuid(),
           text: text,
           completed: false
         }
       ] 
    });
  },

  handleSearch(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  handleToggle(id){
    var updatedTodos=this.state.todos.map((todo) => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  },
  
  render() {
    var {todos} = this.state;
    return (
      <div className="App">
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <TodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

export default TodoApp;
