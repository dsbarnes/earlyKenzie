import { 
    domain, 
    jsonHeaders, 
    handleJsonResponse 
    } from "./constants";
import { getAllMessages} from "./messages";
export const LIKE = "LIKE"
export const DELETE_LIKE = "DELETE_LIKE"

const url = domain + "/likes"

export const likeButtonAction = 
    (messageId, likeId) => (dispatch, getState) => {

    const bodyForLike = {messageId : messageId}
    const token = getState().auth.login.token

    fetch(url, {
        method: "POST",
        headers: {...jsonHeaders, Authorization: `Bearer ${token}`},
        body: JSON.stringify(bodyForLike)
    })
    .then(handleJsonResponse)
    .then( () => {
        likeKweet(messageId)
        dispatch(getAllMessages())
        // dispatch(getUserMessages())
    })
    .catch(err => {
        err.message === 'Like already exists' ?
        fetch(url + `/${likeId}`, {
            method: "DELETE",
            headers: {...jsonHeaders, Authorization: `Bearer ${token}`},
        })
        .then(handleJsonResponse)
        .then( () => {
            deleteLike(likeId)
            dispatch(getAllMessages())
            // dispatch(getUserMessages())
        }) :
        console.log(err.message)
    })
}

const likeKweet = (messageId) => dispatch =>{
    dispatch({
        type: LIKE,
        payload: messageId
    })
}

const deleteLike = (_, likeId) => dispatch => {
    dispatch({
        type: DELETE_LIKE,
        payload: likeId
    })
}