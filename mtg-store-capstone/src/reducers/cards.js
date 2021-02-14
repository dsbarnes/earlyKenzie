// import { GET_ALL_CARD_DATA, GET_ALL_CARD_DATA_SUCCESS, GET_ALL_CARD_DATA_FAIL } from "../actions"
import {GET_USER_CARDS_DATA, GET_USER_CARDS_DATA_SUCCESS, GET_USER_CARDS_DATA_FAIL } from "../actions"


const initialState = {
    cardData: {},
    userCardData: {}
};


export default (state = initialState, { type, payload }) => {
    switch (type) {
        // case GET_ALL_CARD_DATA:
        //     return {
        //         ...state
        //     };

        // case GET_ALL_CARD_DATA_SUCCESS:
        //     return {
        //         ...state,
        //         cardData: payload
        //     };

        // case GET_ALL_CARD_DATA_FAIL:
        //     return {
        //         ...state
        //     };

        case GET_USER_CARDS_DATA:
            return{
                ...state
            }

        case GET_USER_CARDS_DATA_SUCCESS:
            return{
                ...state,
                userCardData: payload
            }

        case GET_USER_CARDS_DATA_FAIL:
            return{
                ...state
            }

        default:
            return state;
    }
};