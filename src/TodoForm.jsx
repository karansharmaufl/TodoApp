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
            <div className="form-group">
                <input type="text" className="form-control" ref="todoText" placeholder="Enter new todo"></input>
                <div>
                    <button className="btn btn-primary btn-lg btn-block">+ Add TODO</button>
                </div>
            </div>
            
            </form>
        );
    } 
});

export default TodoForm;