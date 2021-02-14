import admin from "firebase-admin";
import serviceAccount from "./firebaseAdminServiceAccount.json";
import { getImagesResponse, postImagesResponse } from "../apiStubs"
import fs from 'fs'

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     storageBucket: "<BUCKET-NAME>.appspot.com"
// });
// const bucket = admin.storage().bucket();

// service firebase.storage {
// match /b/{bucket}/o {
//     match /{allPaths=**} {
//         allow read, write: if request.auth != null;
//     }}
// }


export const find = () => {
    // console.log(process.env.RAZZLE_PUBLIC_DIR)
    // return fs.promises.readdir(
    //     process.env.RAZZLE_PUBLIC_DIR + "/images/")
    //     .then( imageNames => { imageNames })

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