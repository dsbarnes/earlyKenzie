import { 
  CREATE_USER, 
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  SET_PROFILE_TO_VIEW,
  UPLOAD_USER_PICTURE,
  USER_PICTURE_SUCCESS,
  USER_PICTURE_FAIL,
  STORE_USER_PICTURE,
  GET_ALL_USERS,
  GET_ALL_USERS_PICTURE
  }from "../actions/users";

const initialState = {
  createUserLoading: false,
  pictureLocation: "",
  getAllUsers: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return{
        ...state,
        createUserLoading: true
      }
    case CREATE_USER_SUCCESS:
      return{
        ...state,
        createUserLoading: false
        
      }
    case CREATE_USER_FAIL:
      return{
        ...state,
        createUserLoading: false
      }
    case GET_ALL_USERS:
      return{
        ...state,
      }
    case GET_ALL_USERS_PICTURE:
      return{
        ...state,
        getAllUsers: action.payload
      }
    case SET_PROFILE_TO_VIEW:
        return{
          ...state,
          userBeingViewed: action.payload
        }
    case UPLOAD_USER_PICTURE:
      return{
        ...state
      }
    case USER_PICTURE_SUCCESS:
      return{
        ...state
      }
    case USER_PICTURE_FAIL:
      return{
        ...state
      }
    case STORE_USER_PICTURE:
      return{
        ...state,
        pictureLocation: action.payload
      }

    default:
      return state;
  }
};
