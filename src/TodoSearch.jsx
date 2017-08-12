import React, { Component } from 'react';
var createReactClass = require('create-react-class');

var TodoSearch = createReactClass({
    handleSearch(){
        var showCompleted=this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;
        this.props.onSearch(showCompleted, searchText);
    },

    render(){
        return(
            <div>
                <div>
                  <input type="search" className="form-control" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}></input>
                </div>
                <div>    
                    <label>
                        <input type="checkbox" className="form-control"  ref="showCompleted" onChange={this.handleSearch}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

export default TodoSearch;