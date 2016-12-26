'use strict';


import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import ReduxThunk from 'redux-thunk';


const routingMiddleware = routerMiddleware(hashHistory);
const store = createStore(allReducers, applyMiddleware(ReduxThunk, routingMiddleware));
const history = syncHistoryWithStore(hashHistory, store);


ReactDOM.render(

  <Provider store={store}>
    <Router history={history}>
    </Router>
  </Provider>,

  document.getElementById('root')

);

