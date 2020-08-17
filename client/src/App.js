/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';


import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blog' component={Blog}></Route>
      </Switch>
    </Router>
  );
}

export default App;
