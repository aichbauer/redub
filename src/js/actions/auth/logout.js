import { hashHistory } from 'react-router';
import axios from 'axios';


/*****************************************
 ***
 ***              LOGOUT
 ***
 *****************************************/
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';


function requestLogout() {

  return {

    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true

  }

}


function receiveLogout() {

  return {

    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false

  }

}


function errorLogout(message) {

  return {

    type: LOGOUT_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message

  }

}


// Logs the user out
export function logout() {

  return dispatch => {

    dispatch(requestLogout());
    localStorage.removeItem('token');
    dispatch(receiveLogout());

  }

}