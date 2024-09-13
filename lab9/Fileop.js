var fs = require('fs');

//reading File data

fs.readFile('samp.txt',function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
})


// Writing into File
fs.writeFile('samp2.txt','Updated Successfully !!!',function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('Done.....!');
    }
})


// //Appending text to File
fs.appendFile('samp.txt','Appended Successfully !!!',function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('Appended.....!');
    }
})

// //Deleting File

fs.unlink('new.txt',function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('File deleted.....!');
    }
})

//Renaming File Synchronously

fs.renameSync('samp.txt','new_samp.txt',function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('File renamed.....!');
    }
})

//Asynchronus File opening
fs.open('samp.txt','r+',function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('File opened successfully.....!');
    }
})


//Web based application with File operation
var http = require('http');

http.createServer(function(req,res){
    fs.readFile('samp.txt',function(err,data){
        if(err)
            console.log(err)
        else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data.toString());
            res.end()
        }
    })
}).listen(8000,function(){
    console.log('Server running at http://localhost:8000/');
})