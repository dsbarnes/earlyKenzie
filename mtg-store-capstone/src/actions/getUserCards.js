import { handleJsonResponse } from "./constants";

export const GET_USER_CARDS_DATA = "GET_USER_CARDS_DATA";
export const GET_USER_CARDS_DATA_SUCCESS = "GET_USER_CARDS_DATA_SUCCESS";
export const GET_USER_CARDS_DATA_FAIL = "GET_USER_CARDS_DATA_FAIL";


export const getUserCards = (name) => dispatch => {
    dispatch({
        type: GET_USER_CARDS_DATA,
        payload: name
    });

    return fetch("http://localhost:5000/user")
        .then(handleJsonResponse)
        .then(users => {
            return dispatch({
                type: GET_USER_CARDS_DATA_SUCCESS,
                payload: users[0]
            });
        })
        .catch(err => {
            return Promise.reject(dispatch({ 
                type: GET_USER_CARDS_DATA_FAIL,
                payload: err
            }));
        });
};


// export const getAllOfTheCardData = dispatch => {
//     return getCardData
// };