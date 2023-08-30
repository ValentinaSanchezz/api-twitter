app.get('/students', (req,res) => {
  res.send(students)

});

app.get('/products', (req,res) => {
    res.send(products)

});


 ////////////////////////////////////////////////////////////

app.post('/student', (req,res) => {
    const data = req.body;
    const student = {
        id: students.length + 1,
        name: data.name,
        age: data.age,
        course: data.course
    }
    
    tweets.push(student)
    res.send(student)

});

app.post('/product', (req,res) => {
    const data = req.body;
    const products = {
        id: students.length + 1,
        name: data.name,
        price: data.price,
        size: data.size // tamaño
    }
    tweets.push(product)
    res.send(product);

});

///////////////////////////////////////////////////////////

app.put('/student/id', (req,res) => {
    const id = +req.params.id;
    const newTweet = req.body;
    students = student.map((pr, index)=> pr.id === id? ({...pr.course + +newhome.course}): pr);
    res.send({update: id})
    

});

app.put('/product/id', (req,res) => {
    const id = +req.params.id;
    const newTweet = req.body;
    products = product.map((pr, index)=> pr.id === id? ({...pr.price + +newhome.price}): pr);
    res.send({update: id})
    
    
});

//////////////////////////////////////////////////////7

app.delete('/student',(req,res) => {
    const student = students.filter(c => parseInt (req.params.id));
    if (!student) return res.status(404),sed('student not found')  
    
    const index = student.indexOf(student);
    student.splice(index,1);
    res.send()

});

app.delete('/product/id',(req,res) => {
    const product = products.filter(c => parseInt (req.params.id));
    if (!product) return res.status(404),sed('removed product')  
    
    const index = product.indexOf(product);
    product.splice(index,1);
    res.send()

});
