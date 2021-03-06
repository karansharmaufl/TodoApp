import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from "jquery";
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import TodoSearch from './TodoSearch.jsx';
//import Foundation from 'foundation-sites/dist/foundation.min.js';
//import TodoApi from './TodoApi.jsx';
//var TodoApi = require('./TodoApi.jsx');
var uuid = require('node-uuid');
var createReactClass = require('create-react-class');
var moment = require('moment');
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

    filterTodos(todos, showCompleted, searchText){
        var filteredTodos= todos;
        // Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo)=>{

            return !todo.completed || showCompleted;
        });
        // Filter By Search Text
        //1. check if search text == empty string return true
        // else return every todo item
        //2. if search text inside use index of 
        filteredTodos = filteredTodos.filter((todo)=>{

            var text = todo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1 ;
        });

        // Filter by sorting(sort with non-completed first)
        filteredTodos.sort((a,b)=>{
           // return -1;  a comes before b else after
           if(a.completed===false && b.completed===true){
             return -1;
           }
           else if(a.completed===true && b.completed===false){
             return 1;
           }
           else{
             return 0;
           }

        })
        return filteredTodos;
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
           completed: false,
           createdAt: moment().unix(),
           completedAt: undefined
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
          todo.completedAt = todo.completed ? moment().unix():undefined;
         
        }
        return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  },
  
  render() {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = this.filterTodos(todos,showCompleted,searchText);
    return (
      <div className="App">
        <h1 className="page-title">Chores Todo</h1>
        <div className="container">
          <div className="row">
            <div className="col small-centered small-11 medium-6 large-5">
              <div className="4container">
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <TodoForm onAddTodo={this.handleAddTodo}/>
              </div>
            </div>
          </div>
        </div>  
      </div>
    );
  }
});

export default TodoApp;
