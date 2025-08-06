const http = require('http')
const fs = require('fs')
const filecontent = fs.readFileSync('54.for,while loops in javascript.html')

// now we will make our server to run our code given here
// here inside http.createserver we written callback function (req,res), 
// where req is request and response and insde it we wrote response argument



const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });     // res.writhead is used to send response header to the incoming request.
    res.end(filecontent)                                     // end method is used to stop processing the current script  the return the end result
})

server.listen(80,'127.0.0.1',()=>{console.log('listening on port 80')})                           // here in server.listen(port,ip address in quotation marks)

// here in res.writeHead we wrote two argument one is response code 
//  other is file which will be expected to be run which is text/html
