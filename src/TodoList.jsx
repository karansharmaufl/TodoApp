import React from 'react';
import Todo from './Todo.jsx'

class TodoList extends React.Component{
    render(){
        var {todos}=this.props;
        var renderTodos = () => {
            if(todos.length===0){
                return(
                    <p className="container__message">Nothing to do</p>
                );
            }
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