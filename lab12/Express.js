var express = require('express')

var app = express()

app.get('/', (req, res) => {
    console.log("/get request")
    res.send('Hello World!')
})


app.get('/:name/:id',(req,res)=> {
    res.send(`Name : ${req.params.name} <br> Id : ${req.params.id}`)
})
app.listen(8000,function(){
    console.log('Server running at http://localhost:8000/')
})