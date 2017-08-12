import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from "jquery";
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import TodoSearch from './TodoSearch.jsx';
//import TodoApi from './TodoApi.jsx';
//var TodoApi = require('./TodoApi.jsx');
var uuid = require('node-uuid');
var createReactClass = require('create-react-class');

var TodoApp = createReactClass ({

  setTodos(todos){
        if($.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos(){
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        try{
            todos=JSON.parse(stringTodos);
        }
        catch(e){   
        }
        
        return $.isArray(todos) ? todos: [] ;
    },

  getInitialState(){
      return{
        showCompleted: false,
        searchText: '',
        todos: this.getTodos()
      };
  },

  componentDidUpdate(){
      this.setTodos(this.state.todos);
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
