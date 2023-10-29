// pipe and pipe chaining
// pipe require readstream and writestram :The pipe() function reads data from a readable stream as it becomes available and writes it to a destination writable stream.
//pipe chaining : It means connecting the output of one stream with another stream. It is used with piping operations. 

const fs = require('fs');
const zlib = require('zlib') 
const gzip = zlib.createGunzip();
const read = fs.createReadStream('./example.txt', 'utf8');   
const write1 = fs.createWriteStream('./example1.txt.gzip');       

read.pipe(gzib).pipe(write1);