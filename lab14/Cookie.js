var express = require('express');

var c= require('cookie-parser')

var app= express();
app.use(c())
app.get('/',(req,res) => {
  res.send("Welcome To FUllstack Lab")
})

app.get('/cookieset',(req,res) => {
    res.cookie('name', 'John Doe');
    res.cookie( 'maxAge' , '900000') ;
    res.send('Cookie set successfully');

})

app.get('/cookieget',(req,res) =>{
    res.send(req.cookies);
    console.log(req.cookies)
})

app.listen(4200,function(){
    console.log('Server running at http://localhost:4200/');
})