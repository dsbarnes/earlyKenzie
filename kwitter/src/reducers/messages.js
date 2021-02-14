// import { handleJsonResponse } from "../actions/constants/index"
import{
  GET_ALL_MESSAGES_REQUEST,
  GET_ALL_MESSAGES_RESPONSE,
  DELETE_MESSAGE,
  GET_USER_MESSAGES
  }from "../actions/messages"

const initialState = {
  allMessages : [],
  userMessages: [],
  isFetching: false,
  userBeingViewed: "",
  getAllUsers: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MESSAGES_REQUEST:
      return{
        ...state,
        isFetching: true
      }
    case GET_ALL_MESSAGES_RESPONSE:
      return{
        ...state,
        isFetching: false,
        allMessages: action.payload
      }
    case GET_USER_MESSAGES:
      return{
        ...state,
        userMessages: action.payload
      }

    case DELETE_MESSAGE:
      return{
        ...state,
      }

    default:
      return state
  }
}