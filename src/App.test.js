import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');
import Todo from './Todo.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
