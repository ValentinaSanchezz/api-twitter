const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());
const world = [];


class moto {
    constructor(id, modelo, año, precio) {
        this.id = id;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
        this.seleccionada = false;
    }
}

const motos = [
    new moto(1, 'nmaxconnected', 2024, 16100000),
    new moto(2, 'xmax300', 2023, 34000000),
    new moto(3, 'tmax', 2024, 85000000),
    new moto(4, 'crypton', 2024, 8400000),
    new moto(5, 'ybrz', 2024, 8400000),
    new moto(6, 'ycz', 2024, 6600000),
    new moto(7, 'szrr', 2024,9500000),
    new moto(8, 'fzversion2',2024,  10600000),
    new moto(9, 'fz25', 2024, 15450000),
    new moto(10, 'xtz125', 2024, 10500000),
    new moto(11, 'xtz150', 2024, 12900000),
    new moto(12, 'xtz250', 2024, 25500000),
    new moto(13, 'mt15', 2024, 16000000),
    new moto(14, 'mt03', 2024, 32100000),
    new moto(15, 'mt07', 2024, 52000000),
    new moto(16, 'mt09', 2024, 57500000),
    new moto(17, 'r1', 2023, 100000000),
]

app.get('/world', (req, res) => {
    res.json(world); // world - motos
});

app.get('/world/:id', (req, res) => {
    const motos = motos.find(m => m.id === parseInt(req.params.id)); // 
    if (!moto) {
        res.status(404).json({ error: 'Moto no disponible' });
    } else {
        res.json(moto);
    }
});
// que se vea la lista de las motose seleccionadas
app.get('/worlds/seleccionadas', (req, res) => {
    const motosSeleccionadas = motos.filter(m => m.seleccionada);
    res.json(motosSeleccionadas);
});

app.post('/compras', (req, res) => {
  res.status(200).json({ mensaje: 'Compra exitosa' });

});

app.put('/world/:id/seleccionar', (req, res) => {

    const worldid = parseInt(req.params.id);
    const moto = motos.find(m => m.id === worldid); 

    if (!moto) {
        res.status(404).json({ error: 'No disponible'}); 
    } else {
        moto.seleccionada = true;
        res.json({ mensaje: 'Producto seleccionado'});
    }
});

// eliminar solo una moto 
// el total de la compra 
//metodo de pago 

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});