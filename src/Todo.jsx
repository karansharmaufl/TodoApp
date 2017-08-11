import React, { Component } from 'react';

class Todo extends React.Component{
    render(){
        var{id,text} = this.props;
        return(
            <div>   
                <h1>{id}. {text}</h1>
            </div>
        )
    }

};

export default Todo;