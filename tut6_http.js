//creating http server

const http = require('http');
const fs = require('fs');
// Create a server
http.createServer((request, response) => {
 
     const readStream = fs.createReadStream('./index.html');
     response.writeHead(200,{'Content-type':'text/html'});
     readStream.pipe(response);
    
    
 
    
    
}).listen(3000); // Server listening on port 3000
 
// console.log("Server started on port 3000");