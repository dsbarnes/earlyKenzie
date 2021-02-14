import { getImagesResponse, postImagesResponse } from "../apiStubs"
import fs from 'fs'



export const find = () => {
    //fs.promises.readdir(process --- + "/images/")
    //.then( imageNames => {
        //console.log(imageNames)
    // })
    return new Promise((res, rej) => {
        res(getImagesResponse.imageURIs)
    })
}

const create = buffer => {
    const timestamp = Date.now()
    return fs.promises.writeFile(
        process.env.RAZZLE_PUBLIC_DIR + "/images/" + timestamp, 
        buffer
    ).then(() => {
        return "/images/" + timestamp
    })
}

export default {
    find,
    create
}