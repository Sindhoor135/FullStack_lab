var fs = require("fs");
var readstream;
readstream = fs.createReadStream("input.txt");
readstream.on("data", function(data) {
    console.log(data.toString());
}); 
console.log('Program ended');

var fs = require("fs");
var stream;
stream = fs.createWriteStream("demo.txt");
stream.write('Some quotes has to be implemented in human life');



// Create an empty file called Output.txt in the same directory.
//Create a js file named main.js with the following code −
var fs = require("fs");
// Create a readable stream
var readerStream = fs.createReadStream('demo.txt');
// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');
// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);
console.log("Program Ended");