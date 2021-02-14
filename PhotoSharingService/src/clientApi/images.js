import { postImagesResponse, getImagesResponse } from "../apiStubs"

export const getImages = () => {
    return new Promise((res, rej) => { 
        res(getImagesResponse)
    })
}
export const postImage = (FromData) => {
    return new Promise((res, rej) => {
        res(postImagesResponse)
    })
}

