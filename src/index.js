import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
require('./style.sass')
import App from './App';
import Admin from './Admin'
import NewCourse from './NewCourse'

import {Router, Route, Link, browserHistory} from 'react-router'


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}></Route>
    <Route path='/admin' component={Admin}></Route>
      <Route path='/admin/courses/new' component={NewCourse}></Route>
  </Router>
), document.getElementById('root'))
