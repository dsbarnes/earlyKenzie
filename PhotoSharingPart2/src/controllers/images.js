import multer from 'multer'
import { Image }  from '../models'

//use fs.writeFile for the Image.create function 
//and fs.readdir for the Image.find function.

const storage = multer.memoryStorage()
const upload = multer({storage: storage}) //Consider storage limits

export const getImages = (req, res) => {

    // fs.promises
    //     .readdir(process.env.RAZZLE_PUBLIC_DIR + "/images")
    //     .then(imageNames => {
    // console.log(imageNames); // imageNames: Array<String>
    // })

    Image.find().then(uris => {
        res.send({ imageURIs: uris, statusCode: 200})
    })
}
export const postImage = [
    upload.single('picture'),

    (req, res) => {
        Image.create(req.file.buffer)
        .then(uri => {
            res.send({ imageURI: uri, statusCode: 200 })
        })
    }
]
