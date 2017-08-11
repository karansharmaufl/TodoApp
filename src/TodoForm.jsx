import React, { Component } from 'react';
var createReactClass = require('create-react-class');

var TodoForm = createReactClass({
   handleSubmit(e){
        e.preventDefault();
        var todoText=this.refs.todoText.value;
        if(todoText.length>0){
            this.refs.todoText.value='';
            this.props.onAddTodo(todoText);
        }
        else{
            this.refs.todoText.focus();
        }
    },
    render(){
        return(
            <form onSubmit={this.handleSubmit}> 
            <input type="text" ref="todoText" placeholder="Enter new todo"></input>
            <button className="button expanded">+ Add TODO</button>
            </form>
        );
    } 
});

export default TodoForm;