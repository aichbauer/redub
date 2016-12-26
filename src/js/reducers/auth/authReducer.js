import {

  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE

} from '../../actions/auth/login';
import {

  REGISTER_REQUEST, 
  REGISTER_SUCCESS, 
  REGISTER_FAILURE

} from '../../actions/auth/register';
import {

  CHECK_TOKEN_SUCCESS, 
  CHECK_TOKEN_FAILURE

} from '../../actions/auth/checkToken';
import {

  LOGOUT_REQUEST, 
  LOGOUT_SUCCESS
  
} from '../../actions/auth/logout';


// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export default function auth(state = {

  isFetching: false,
  isAuthenticated: false

}, action) {

  switch (action.type) {

    case LOGIN_REQUEST:
    
      return Object.assign({}, state, {

        isFetching: true,
        isAuthenticated: false,
        user: action.creds

      });


    case LOGIN_SUCCESS:

      return Object.assign({}, state, {

        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''

      });


    case LOGIN_FAILURE:

      return Object.assign({}, state, {

        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message

      });


    case REGISTER_REQUEST:

      return Object.assign({}, state, {

        isFetching: true,
        isAuthenticated: false,
        user: action.creds

      });


    case REGISTER_SUCCESS:

      return Object.assign({}, state, {

        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''

      });


    case REGISTER_FAILURE:

      return Object.assign({}, state, {

        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message

      });


    case LOGOUT_SUCCESS:

      return Object.assign({}, state, {

        isFetching: true,
        isAuthenticated: false

      });


    case CHECK_TOKEN_SUCCESS:

      return Object.assign({}, state, {

        isFetching: false,
        isAuthenticated: true

      });


    case CHECK_TOKEN_FAILURE:

      return Object.assign({}, state, {

        isFetching: false,
        isAuthenticated: false

      });


    default:

      return state

  }
  
}
