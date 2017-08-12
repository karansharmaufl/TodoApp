import React, { Component } from 'react';
import TodoApp from './TodoApp.js';
import Todo from './Todo.jsx'

class TodoList extends React.Component{
    render(){
        var {todos}=this.props;
        var renderTodos = () => {
            return todos.map((todo) => {
                return(
                    // Passing the todo variables using spread operator
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
                );
            });
        };
        return(
            <div>   
                {renderTodos()}
            </div>
        )
    }

};

export default TodoList;