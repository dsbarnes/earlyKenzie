import { 
  LOGIN, 
  LOGIN_SUCCESS, 
  LOGIN_FAIL, 
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  } from "../actions/auth";

const initialState = {
  loginLoading: false,
  login: null,
  loginError: null,
  logoutError: null,
  loggedInUser: "",
  isLoggedIn: false,
}

const getInitState = () => {
  return JSON.parse(localStorage.getItem("auth")) || initialState
}

export default (state = getInitState(), action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginLoading: true,
        loginError: null
      }
    case LOGIN_SUCCESS:
      return { 
        ...state, 
        login: action.payload, 
        loginLoading: false,
        isLoggedIn: true,
        loggedInUser: action.payload.username
      }
    case LOGIN_FAIL:
      return { 
        ...state, 
        loginError: action.payload, 
        loginLoading: false 
      }

      case LOGOUT:
        return {
          ...state,
          logoutError: null
        }
      case LOGOUT_SUCCESS:
        return{
          ...state,
          login: null,
          isLoggedIn: false
        }
      case LOGOUT_FAIL:
        return{
          ...state,
          logoutError: action.payload
        }
      

    default:
      return state
  }
}