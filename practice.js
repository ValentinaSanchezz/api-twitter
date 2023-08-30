const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send()
});

app.get('/ ', (req, res) => {
 res.send()
});

app.get('/cellphones', (req,res) => {
    res.send(cellphones)
});

app.post('/cellphone', (req, res) => {
    const data = req.body;
    const payload = {
        id: cellphones.length + 1,
        model: data.model,
        description: data.description,
        price: data.price,
        
    };
    cellphones.push(payload)
    res.send(payload);
});


app.put('/cellphone/:id', ( req,res) => {
    const id = +req.params.id;
    const newmodel = req.body;
    cellphone = cellphone.map((pr, index)=> pr.id === id ? ({...pr.price + +newhome.price}): pr);
    res.send({update: id})
})

app.delete('/cellphone/:id', (req, res) => {
    const idBorrar = parseInt(req.params.id);
    cellphones = cellphones.filter(cellphones=> cellphones.id !== idBorrar);
    res.json({ mesanje: 'removed product'});
})






