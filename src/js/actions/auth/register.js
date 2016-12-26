import { hashHistory } from 'react-router';
import axios from 'axios';


/*****************************************
 ***
 ***              REGISTER
 ***
 *****************************************/
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';


function requestRegister(creds) {

  return {

    type: REGISTER_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds

  }

}


function receiveRegister(user) {

  return {

    type: REGISTER_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token

  }

}


function errorRegister(message) {

  return {

    type: REGISTER_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message

  }
  
}


export const register = (creds) => {

  console.log('hi');

  return dispatch => {

    axios.post('http://localhost:1337/api/register', {

      headers: {

        'Content-Type': 'application/x-www-form-urlencoded'

      },

      email: creds.email,

      password: creds.password

    })
      .then(function (response) {

        console.log(response);

        if (response.data) {

          localStorage.setItem('token', response.data.token);
          dispatch(receiveRegister(response.data.user));
          hashHistory.push('/dashboard');

        }
        else dispatch(errorRegister());

      })
      .catch(function (error) {

        dispatch(errorRegister());

      })

  }

};