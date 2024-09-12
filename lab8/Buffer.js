const buffer1 = Buffer.alloc(100);
const buffer2 = new Buffer('MCA');
const buffer3 = Buffer.from([1, 2, 3, 4]);

// Writing data to Buffer
buffer1.write("Welcome to our Department");

// Reading data from Buffer
const a = buffer1.toString();

console.log(a);


// Check object is buffer or not
console.log(Buffer.isBuffer(buffer1));

// Check length of Buffer
console.log(buffer2.length);

// Copy buffer
const bufferSrc = new Buffer('ABC');
const bufferDest = Buffer.alloc(3);
bufferSrc.copy(bufferDest);

const Data = bufferDest.toString();
console.log(Data);

// Slicing data
const bufferOld = new Buffer('Master of Computer Applications');
const bufferNew = bufferOld.slice(0, 4);
console.log(bufferNew.toString());
// console.log(bufferOld.slice(0,4).toString())

// concatenate two buffer
const bufferOne = new Buffer('Buffer example  \b');
const bufferTwo = new Buffer('Executed Successfully');
const bufferThree = Buffer.concat([bufferOne, bufferTwo]);
console.log(bufferThree.toString());

// console.log(Buffer.concat([bufferOne,bufferTwo]).toString())