const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000

let scores = [{name: "Edwin", score: 50}, {name: "David", score: 39}];

app.get('/Scores', function(req, res){
    res.setHeader('Content-Type', 'application/javascript')
    res.send(JSON.stringify(scores))
})

app.post('/Scores', function(req, res, next){
    // console.log(req.body.name, req.body.score)
    scores.push({"name": req.body.name, "score": req.body.score})
    scores = scores.sort( (a, b) => b.score - a.score ).slice(0, 3)
    // console.log(scores)
    res.send('201')
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))

