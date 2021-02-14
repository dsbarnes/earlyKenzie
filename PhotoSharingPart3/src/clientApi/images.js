import { postImagesResponse, getImagesResponse } from "../apiStubs"

const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })



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

