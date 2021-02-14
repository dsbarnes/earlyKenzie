import { domain, jsonHeaders, handleJsonResponse } from "./constants";

import {getAllUsers} from "./users"

export const GET_ALL_MESSAGES_REQUEST = "GET_ALL_MESSAGES_REQUEST"
export const GET_ALL_MESSAGES_RESPONSE = "GET_ALL_MESSAGES_RESPONSE"
export const DELETE_MESSAGE = "DELETE_MESSAGE"
export const GET_USER_MESSAGES = "GET_USER_MESSAGES"

const url = domain + "/messages"
export const getAllMessages = () => {
    return dispatch => {
        dispatch(getAllMessagesRequest())
        fetch(url)
            .then(handleJsonResponse)
            .then(data => {
                dispatch(getAllMessagesResponse(data.messages))
                return data
            })
            // .catch()
        

        // fetch(domain + 'users')
        // .then(handleJsonResponse)
        // .then(data => {

        // })
        // .catch()
    }
}
const getAllMessagesRequest = () => {
    return({
            type: GET_ALL_MESSAGES_REQUEST
        })
}
const getAllMessagesResponse = (messages) => {
    return({
            type: GET_ALL_MESSAGES_RESPONSE,
            payload: messages
        })
}

export const getUserMessages = (username) => {
    return dispatch => fetch(`${url}/?username=${username}`)
    .then(handleJsonResponse)
    .then(data => {
        dispatch(getUserMessageResponse(data.messages))
        return data
    })
}
const getUserMessageResponse = (messages) => {
    return({
        type: GET_USER_MESSAGES,
        payload: messages
    })
}

export const deleteMessage = (messageId) => (dispatch, getState) => {
    const token = getState().auth.login.token
    const delURL = domain + `/messages/${messageId}`
    fetch(delURL, {
        method: "DELETE",
        headers: {...jsonHeaders, Authorization: `Bearer ${token}`},
    })
    .then(handleJsonResponse)
    .then(() => dispatch( dispatchDelete()) )
    .then(() => dispatch( getAllMessages()) )
    .then(() => dispatch( getUserMessages(getState().auth.loggedInUser)) )
    // .catch()
}
const dispatchDelete = () => {
    return({
        type: DELETE_MESSAGE
    })
}
export const getFeedPageData = () => dispatch => {
    dispatch( getAllUsers() )
    .then( () => dispatch( getAllMessages() ))
}
