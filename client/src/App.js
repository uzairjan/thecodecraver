/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { createStore } from 'redux';
import {getArticle} from './actions/index';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./components/Articles";
import Blog from "./components/Blog";
import rootReducer from './reducers/index';

const store = createStore(rootReducer);
console.log('store.getState: ', store.getState());

store.subscribe(() => console.log('store',store.getState()));

store.dispatch(getArticle());


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Articles} />
          <Route exact path="/blog" component={Blog}></Route>
        </Switch>
      </Router>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;

// View articles
// Write article
// View article
// Social sign in
// Clap article
// Follow user
// View user
// Feed component
// Editor component
// ArticleView component
// SignInWith component
// FollowButton component
// Profile component
