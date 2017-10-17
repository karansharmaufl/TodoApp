import React from 'react';
var moment = require('moment');

class Todo extends React.Component{

    getCreatedAt(){
        var{completed,createdAt,completedAt} = this.props;
        var message = 'Created at ';
        var timeStampCreation= createdAt;
        var timeStampCompletion= completedAt;
        if(completed){
           timeStampCompletion = moment().unix(); 
        }
        //console.log('debug'+completed);
        timeStampCreation = message + moment.unix(timeStampCreation).format('MMM Do YYYY @h:mm a');
        timeStampCompletion = 'Completed at ' + moment.unix(timeStampCompletion).format('MMM Do YYYY @h:mm a');
        if(completed){
            return timeStampCompletion;
        }
        else{
            return timeStampCreation;
        }
    }
    
    render(){
        var{id,text,completed} = this.props;
        var toDoClassName = completed ? "todo todo-completed" : "todo";
        //console.log("debughere: "+ toDoClassName);
        return(

            <div className={toDoClassName} onClick={() => {
                    this.props.onToggle(id);
                }}>  
                
                <div>
                    <input type="checkbox" className="todo__checkbox" checked={completed}/> 
                </div>
                <div>
                    <p>{text}</p>        
                    <p className="todo__subtext">{this.getCreatedAt()}</p>    
                </div>
                
            </div>
        )
    }

};

export default Todo;