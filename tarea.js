const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const estates = [];

app.use(bodyParser.urlencoded({ extended: false }));
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next)=> {

	console.log(`La ruta actual es: ${req.path}`);
	next();
})

app.get('/estates', (req, res) => {
  res.send(estate)
});


app.post('/estate', (req, res) => {
    const data = req.body;
    const realestate = {
      id: estate.length + 1, 
      description: data.description,
      location: data.location,
      price: 0
    }
    console.log("Nuevo: ", realestate);
    estate.push(realestate)
    res.send(realestate); 
	
});



app.get('/estate/:id', (req, res) => {
   const estateId = req.params.id;
   const currentEstate =  estate.filter((data) => data.id === +estateId);
  
   console.log(currentEstate)
   res.send(currentEstate[0]);
})

app.put('/estate/:id', (req,res) =>{
  const id = +req.params.id;
  const newhome = req.body;
  estate = estate.map((pr, index)=> pr.id === id? ({...pr.price + +newhome.price}): pr);
  res.send({update: id});
});



app.delete('/estate/:id', (req,res) => {
  const idBorrar = parseInt(req.params.id);
  estate = estate.filter(estate => estate.id !==idBorrar);
  res.json({mensaje: 'inmueble eliminado con exito'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

