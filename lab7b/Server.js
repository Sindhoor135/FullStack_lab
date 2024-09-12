var c=require('./cal')

var http=require('http')
var a=10,b=5;

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    res.write(`Sum of ${a} and ${b} = ${c.Addition(a,b)}<br>`)
    res.write(`Difference of ${a} and ${b} = ${c.Subtraction(a,b)}<br>`)
    res.write(`Product of ${a} and ${b} = ${c.Multiplication(a,b)}<br>`)
    res.write(`Quotient of ${a} and ${b} = ${c.Division(a,b)}`)
    res.end()
}
).listen(4200,function(){console.log("listening on port 4200")})