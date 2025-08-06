const fs  = require('fs')
const http = require('http')

const hostname = '127.0.0.1'           // local host name
const port = 3000

const home = fs.readFileSync('index.html')
const about = fs.readFileSync('about.html')
const services = fs.readFileSync('services.html')
const contact = fs.readFileSync('contact.html')


const server = http.createServer((req,res)=>{
    console.log(req.url);          
    url = req.url;

    res.statusCode = 200;       // res.statusCode sets the http code for the  status for the response.

    res.setHeader('Content-Type','text/html');
    if(url == '/'){
        res.end(home);
       }

    else if(url == '/about'){
        res.end(about)
    }

    else if(url == '/Services'){
        res.end(services)
    }

    else if(url == '/Contact'){
        res.end(contact)
    }

    else{res.statusCode=404;
        res.end('<h1>404 not found </h1>')}
});


server.listen(port , hostname ,()=>{
    console.log(`server running at http://${hostname}:${port}`)
})