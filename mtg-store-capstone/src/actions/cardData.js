import { handleJsonResponse } from "./constants";
// import { push } from "connected-react-router";

export const GET_ALL_CARD_DATA = "GET_ALL_CARD_DATA";
export const GET_ALL_CARD_DATA_SUCCESS = "GET_ALL_CARD_DATA_SUCCESS";
export const GET_ALL_CARD_DATA_FAIL = "GET_ALL_CARD_DATA_FAIL";


export const getCardData = (name) => dispatch => {
    dispatch({
        type: GET_ALL_CARD_DATA,
        payload: name
    });

    return fetch("https://api.scryfall.com/cards/named?fuzzy=" + name)
        .then(handleJsonResponse)
        .then(cards => {
            return dispatch({
                type: GET_ALL_CARD_DATA_SUCCESS,
                payload: cards
            });
        })
        .catch(err => {
            return Promise.reject(dispatch({ 
                type: GET_ALL_CARD_DATA_FAIL,
                payload: err
            }));
        });
};


// export const getAllOfTheCardData = dispatch => {
//     return getCardData
// };