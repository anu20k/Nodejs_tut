//The createReadStream() method is an inbuilt application programming interface of fs module which allow you to open up a file/stream and read the data present in it.

const fs = require('fs');
const gzlip = require('zlib') 

const read = fs.createReadStream('./example.txt', 'utf8');   //read file\
const write1 = fs.createWriteStream('./example1.txt');       //write one to another file

read.on('data',(chunk)=>{
    write1.write(chunk);
})


