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
    },
    render(){
        return(
            <form onSubmit={this.handleSubmit}> 
            <input type="text" ref="todoText" placeholder="Enter new todo"></input>
            <button>+ Add TODO</button>
            </form>
        );
    } 
});

// class TodoForm extends React.Component{
//     onFormSubmit(e){
//         e.preventDefault();
//         console.log(this.refs.todoName.value);
//         var todoName=this.refs.todoName.value;
//         if(todoName.length>0){
//             this.refs.todoName='';
//             this.props.onAddTodo(todoName);
//         }
//     }
//     render(){
//         return(
//             <form onSubmit={this.onFormSubmit}> 
//             <input type="text" ref="todoName" placeholder="Enter new todo"></input>
//             <button>+ Add TODO</button>
//             </form>
//         );
//     }
// }

export default TodoForm;