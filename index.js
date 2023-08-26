const express = require('express')
const app = express();
const port = 3000
const bodyParser = require('body-parser')
let tweets = [];
app.use(bodyParser.urlencoded({ extended: false }))
const cors = require('cors')
app.use(bodyParser.json());
app.use(cors());


app.get('/tweets', (req, res) => {
      res.send(tweets);
});

app.post('/tweet', (req, res) => {
    const data = req.body;
    const payload = {
        id: tweets.length + 1,
        user: data.user,
        description: data.description,
        date: new Date(),
        like: 0,
        rt: 0,
    };
    tweets.push(payload)
    res.send(payload);
});

app.put('/tweet/:id', ( req,res) => {
    const id = +req.params.id;
    const newTweet = req.body;
    tweets = tweets.map((pr, index)=> pr.id === id ? ({...pr, rt: pr.rt + +newTweet.rt, like: pr.like + +newTweet.like}) : pr);
    res.send({update: id})
})

app.delete('/tweet/:id', (req, res) => {
    const idBorrar = parseInt(req.params.id);
    tweets = tweets.filter(tweets => tweets.id !== idBorrar);
    res.json({ mesanje: 'Eliminado con exito' });
})

app.listen(port, () => {
    console.log(`Tweeter API  listening on port http://localhost:${port}`)
})


