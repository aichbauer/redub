import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import authReducer from './auth/authReducer';


const allReducers = combineReducers({

  routing: routerReducer,
  auth: authReducer,

});


export default allReducers;