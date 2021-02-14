import { LIKE, DELETE_LIKE } from "../actions/likes"

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIKE:
      return{
        ...state
      }

    case DELETE_LIKE:
      return{
        ...state
      }
    default:
      return state;
  }
};
