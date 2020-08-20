import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './components/Store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";

console.log("store: ",store.getState());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
