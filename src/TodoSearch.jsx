import React from 'react';
var createReactClass = require('create-react-class');

var TodoSearch = createReactClass({
    handleSearch(){
        var showCompleted=this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;
        this.props.onSearch(showCompleted, searchText);
    },

    render(){
        return(
            <div className="container__header">
                <div>
                  <input type="search" className="form-control" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}></input>
                </div>
                <div>    
                    <label className="container__label">
                        <input type="checkbox" className="container__completedcheckbox"  ref="showCompleted" onChange={this.handleSearch}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

export default TodoSearch;