import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  hashHistory,
  IndexRoute,
  Route,
  Router,
} from 'react-router';
import {
  routerMiddleware,
  syncHistoryWithStore,
} from 'react-router-redux';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';


import allReducers from './reducers/index';

import App from './containers/wrapper/app';

import index from './views/index';


const routingMiddleware = routerMiddleware(hashHistory);

const store = createStore(allReducers, composeWithDevTools(
  applyMiddleware(ReduxThunk, routingMiddleware),
));

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={index} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

