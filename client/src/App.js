/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";

import {getArticle, getArticles} from './actions/index';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./components/Articles";
import Blog from "./components/Blog";


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
