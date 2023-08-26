const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const estates = [];
// pregunta: estate es singular ? si y si es un array que pasa? tiene que ser en plural. listo ve escribiendo las cosas que te comente. como esta;si jose 
app.use(bodyParser.urlencoded({ extended: false }));
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next)=> {
// espera que estoy buscando algo en inter del object req, quiero imprimir en pantalla la ruta donde se esta llamando bueno jose
	console.log(`La ruta actual es: ${req.path}`);
	next();
})
//Bienes
app.get('/estates', (req, res) => {
  res.send(estate)
});

//Bienes raices , vivienda
app.post('/estate', (req, res) => {
    const data = req.body;
    const realestate = {
      id: estate.length + 1, // esto es un error muy comun, aun me pasa confundir  lenght con length entonces por eso no daba yep, vamos de nuevo
      livingplace: data.livingplace,
      description: data.description,
      location: data.location,
      price: 0
    }
    console.log("Nuevo: ", realestate);
    estate.push(realestate)
    res.send(realestate); // te falto la letra d es send no entiendo . lo tenias asi mira
	// me hago endenter si ya termina en d ese es el error  yep
});

/*
Que falta aqui? en  /estate.id. hagale
eso esta como raro  mira bien. yap me falto el / yep.

ahora voy a crear un  path que me retorne una casa. listo?si
*/

app.get('/estate/:id', (req, res) => {
   const estateId = req.params.id;
   const currentEstate =  estate.filter((data) => data.id === +estateId);
  // hay otra forma, mucho mejor para hacer esto, pero lo voy hacer con filter porque tu sabes que es, listo? si jose
  // filter retorna el array si el valor del item es true, por ejemplo id === estateId, me hago entender? si t i, en currentEstate[0] estoy el item numero? 0 yep
   console.log(currentEstate)
   res.send(currentEstate[0]);
})
// ahora en el postman llama a la ruta /estate/1 por ejemplo. pero antes tienes que crear varias estates. me hago entender? si tengo que crear mas de 2 pero ahora no me queria dar llamo a la ruta y me aparece error . claro porque no esta corriendo la api , entonces ya si da 

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

