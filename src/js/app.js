'use strict';
/*Import everything you need for the app*/
//makes it backwards compatible (code)
import 'babel-polyfill';
//react library
import React from 'react';
//react virtual dom
import ReactDOM from 'react-dom';
//
import { Provider } from 'react-redux';
//import just the create store function from the module redux
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import ReduxThunk from 'redux-thunk';

console.log('hello worlds');


/*const routingMiddleware = routerMiddleware(hashHistory);
//the store us storing all the data for the application
const store = createStore(allReducers, applyMiddleware(ReduxThunk, routingMiddleware));
//const store = configureStore(allReducers);

const history = syncHistoryWithStore(hashHistory, store);



ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    </Router>
  </Provider>,
  document.getElementById('root')
);*/

