const fs = require('fs');

// fs.writeFile('example.txt', "hello i am anuja", (err)=>{
//     if(err){
//         console.log('error occured');
//     }
//     else{
//         console.log('file successfully created');
//         fs.readFile('example.txt','utf8',(err,file)=>{       //there are three parameters of readfile. 1)file name 2)encoded type 3)call back function .utf8 is encoded type . if we not mention then it display file data in byte format.
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(file);
//             }
//         })
//     }
// })

// fs.rename('example.txt', 'example1.txt',(err)=>{
//     if(err){
//         console.log('err');
//     }
//     else{
//         console.log('succesfully rename');
//     }
// })

fs.appendFile('example1.txt', 'some data was appended',(err)=>{
    if(err){
        console.log('err');
    }
    else{
        console.log('succesfully appended');
    }
})

//to delete file
fs.unlink('example1.txt',(err)=>{
    if(err){
        console.log('err');
    }
    else{
        console.log('file deleted succesfully');
    }
})