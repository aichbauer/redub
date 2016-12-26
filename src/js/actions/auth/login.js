import {hashHistory} from 'react-router';
import axios from 'axios';


/*****************************************
 ***
 ***              LOGIN
 ***
 *****************************************/
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


function requestLogin(creds) {

  return {

    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds

  }

}


function receiveLogin(user) {

  return {

    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token

  }

}


function errorLogin(message) {

  return {

    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message

  }
  
}


export const login = (creds) => {

    return dispatch => {

      axios.post('http://localhost:1337/api/login', {

        headers: {

          'Content-Type': 'application/x-www-form-urlencoded'

        },

        email: creds.email,

        password: creds.password

      })
        .then(function (response) {

          console.log(response);

          if (response.data){

            localStorage.setItem('token', response.data.token);
            dispatch(receiveLogin(response.data.user));
            hashHistory.push('/dashboard');

          }
          else dispatch(errorLogin());

        })
        .catch(function (error) {

          dispatch(errorLogin());

        })

    }

};