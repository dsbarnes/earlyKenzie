import { getImagesResponse, postImagesResponse } from "../apiStubs"

export const getImages = (req, res) => {
    res.send(getImagesResponse)
}

export const postImage = (req, res) => {
    res.send(postImagesResponse)
}
