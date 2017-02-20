'use strict';


import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { 
  
  createStore, 
  applyMiddleware 

} from 'redux';
import { 

  Router, 
  Route, 
  IndexRoute, 
  hashHistory 

} from 'react-router';
import { 
  
  syncHistoryWithStore, 
  routerMiddleware 

} from 'react-router-redux';
import ReduxThunk from 'redux-thunk';
import DevTools from './components/devTools/devTools';

import allReducers from './reducers/index';

import App from './containers/wrapper/app';

import index from './views/index/index';


const routingMiddleware = routerMiddleware(hashHistory);
//TODO: create a production file without dev tools and a development file with dev tools
const enhancer = compose(

  applyMiddleware(ReduxThunk, routingMiddleware),
  DevTools.instrument()

);

function configureStore(initialState) {
  
  const store = createStore(allReducers, initialState, enhancer);

  if (module.hot) {

    module.hot.accept('./reducers/index', () =>

      store.replaceReducer(require('./reducers/index'))

    );

  }

  return store;

}

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);


ReactDOM.render(

  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={index} />
      </Route>
    </Router>
  </Provider>,

  document.getElementById('root')

);

