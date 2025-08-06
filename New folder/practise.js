const fs = require('fs')
const http = require('http')


const home = fs.readFileSync('./home.html')
const about = fs.readFileSync('./about.html')
const services = fs.readFileSync('./services.html')
const contact = fs.readFileSync('./contact.html')


const server = http.createServer((req,res)=>{
    url = req.url;
    console.log(url)

    res.statuscode = 200

    if (url == '/'){
        res.end(home)
    }

   else if(url == '/about'){
        res.end(about)
    }

   else if(url == '/Services'){
        res.end(services)
    }



})



server.listen(80,'127.0.0.1',()=>{console.log('the Getsuga Tenshou')})









