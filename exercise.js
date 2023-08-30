const express = require('express')
const app = express()
const port = 3000
const student = [];


app.use(express.json());

const students = [
    {id: 1, name: 'valentina', age: 24, course: 11 },
    {id: 2, mame: 'melisa', age:27, course: 10 },
    {id: 3, name: 'manuela', age:25, course: 8 },
];


app.get('/students', (req, res) => {
  res.send(students)
});


app.get('/students/:id', (req, res) => {
    const student = students.find(c => c.id === parseInt (req.params.id)); // no filter 
    console.log(student,!student)
    if (!student) return res.status(404).send('student not found') // estudiante no enocntrado
    else res.send(student)
  });
  

app.post('/students', (req,res) => {
    const data = req.body;
    const student = {
        id: students.length + 1,
        name: data.name,
        age: data.age,
        course: data.course
    }
    
    student.push(student); // agregar al arreglo
    res.send(student)
});


app.delete('/students', (req, res) => {
    const student = students.filter(c => parseInt (req.params.id));
    if (!student) return res.status(404),sed('student not found')  // estudiante no enocntrado
    
    const index = student.indexOf(student);
    student.splice(index,1);
    res.send(student);
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






