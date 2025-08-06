const  http = require('http')

const hostname = '127.0.0.1' 

const port = 3400

const server = http.createServer((req,res)=>{
    res.statusCode= 200
    res.setHeader('Content-Type','text/plain')                // setHeader allows us to send http type header content including cookie headers 
    res.end('Hello dostos');                                 // while writeheader allows to send http response header field like status code and content type header fields
    
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})

// to write file path just write 63 and then press enter

// statuscode says whether the code has been successfully run or not basically there are five type of statuscode 
// 1.information response(100 - 199)   2.successful response (200 - 299)   3. Redirection messages(300 - 399)  4.client error responses(400 - 499)  5.server side response(500 - 599)


// header types 
// 1. request headers : to send request which is generally sent by the client (us developers) to the server 

// 2. response headers: sent by the server to provide information about the response 


// res.writehead(statuscode , status message (status message must be written between double underquotes))

// res.end means server will respond to the given text and then it will show at the webpage

