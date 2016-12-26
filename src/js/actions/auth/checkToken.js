import {hashHistory} from 'react-router';
import axios from 'axios';


/*****************************************
 ***
 ***        TOKEN VALIDATION
 ***
 *****************************************/
export const CHECK_TOKEN_SUCCESS = 'CHECK_TOKEN_SUCCESS';
export const CHECK_TOKEN_FAILURE = 'CHECK_TOKEN_FAILURE';


function receiveValidToken() {

  return {

    type: CHECK_TOKEN_SUCCESS,
    isFetching: true,
    isAuthenticated: true

  }

}


function errorValidToken() {

  return {

    type: CHECK_TOKEN_FAILURE,
    isFetching: false,
    isAuthenticated: false

  }
  
}


export const isAuthorized = () => {

    return dispatch => {

      axios.post('http://localhost:1337/api/isvalid', {

        headers: {

          'Content-Type': 'application/x-www-form-urlencoded'

        },
        token: localStorage.getItem('token') || ''

      })
        .then(function (response) {

          if (response.data.isvalid == true) dispatch(receiveValidToken());
          else hashHistory.push('/');

        })
        .catch(function (error) {

          dispatch(errorValidToken());
          hashHistory.push('/');

        })

    }

};