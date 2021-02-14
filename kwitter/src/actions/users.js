import { 
    domain, 
    jsonHeaders, 
    handleJsonResponse 
    } from "./constants";
import { push } from "connected-react-router";
import { login } from "./auth"
// action types
export const CREATE_USER = "CREATE_USER"
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS"
export const CREATE_USER_FAIL = "CREATE_USER_FAIL"
export const SET_PROFILE_TO_VIEW = "SET_PROFILE_TO_VIEW"
export const UPLOAD_USER_PICTURE = "UPLOAD_USER_PICTURE"
export const USER_PICTURE_SUCCESS = "USER_PICTURE_SUCCESS"
export const USER_PICTURE_FAIL = "USER_PICTURE_FAIL"
export const STORE_USER_PICTURE = "STORE_USER_PICTURE"
export const GET_ALL_USERS = "GET_ALL_USERS"
export const GET_ALL_USERS_PICTURE = "GET_ALL_USERS_PICTURE"

const url = domain + "/users" 

const createUser = newUserData => dispatch => {
    dispatch({
        type: CREATE_USER,
    })
    return fetch(url, {
        method: "POST",
        headers: jsonHeaders,
        body: JSON.stringify(newUserData)
    })
        .then(handleJsonResponse)
        .then(results => {
            dispatch({
                type: CREATE_USER_SUCCESS,
                payload: results
            })
            dispatch(login({
                username: results.user.username,
                password: newUserData.password
            }))
        })
        .catch(err => {
            return Promise.reject(
                // console.log("err.message: ", err.message)
                dispatch({ type: CREATE_USER_FAIL, payload: err.message})
            )
        })
}
export const createUserThenLogin = function(newUserData){
    return function(dispatch){
        dispatch(createUser(newUserData))
            .then(dispatch(push("/home")))
    }
}

export const getAllUsers = () => dispatch => {
    dispatch ({
        type: GET_ALL_USERS
    })
    return fetch(url)
    .then(handleJsonResponse)
    .then(res =>{
        dispatch({
            type: GET_ALL_USERS_PICTURE,
            payload: res.users.map(userObject => {
                return({
                    pictureLocation: userObject.pictureLocation,
                    username: userObject.username,
                    displayName: userObject.displayName,
                    about: userObject.about,
                    // googleId: null,
                    createdAt: userObject.createdAt,
                    updatedAt: userObject.updatedAt,    
                })
            })
        })
    })
    // .catch()
}

export const setProfileToView = (username) => {
    return({
        type: SET_PROFILE_TO_VIEW,
        payload: username
        })
}

export const uploadPicture = (formData) => (dispatch, getState) =>{
    console.log("clicked")
    dispatch({
        type: UPLOAD_USER_PICTURE
    })
    const username = getState().auth.login.username
    const token = getState().auth.login.token
    return fetch(url + `/${username}/picture`, {
        method: "PUT",
        headers: {Authorization: `Bearer ${token}`},
        body: formData
    })
    .then(res => {
        dispatch({
            type: STORE_USER_PICTURE,
            payload: res.url
        })
        return res.json()

    })
    .then(result => {
        return dispatch({
            type: USER_PICTURE_SUCCESS,
            payload: result
        })
    })
    .catch(err => {
        return Promise.reject(
            dispatch({
                type: USER_PICTURE_FAIL,
                payload: err
            })
        )
    })
}