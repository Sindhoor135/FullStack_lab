var fs= require('fs');

//Reading File ASynchronously
fs.readFile('samp.txt', (err, data) => {
    if (err) throw err;
    console.log('File Content:', data.toString());
})


console.log('program Ended')

// Reading File Synchronously
var data=fs.readFileSync('samp.txt'); 
   
console.log('File Content:', data.toString());
