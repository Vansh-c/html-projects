// Synchronous code or blockig executioin: code will be executed line by line one after another
// Asynchrounoous code or non blocking execution : line by line execution no guaranteed  and callback will fire

// last time we saw that readFileSync() function which is blocking or sunchronous code execution

// below is example of synchronous code
console.log('===>below is example of synchronous code')
let fs = require('fs')
let file = fs.readFileSync('vansh.txt','utf-8')
console.log(file)


console.log()
console.log()
// below is example of asynchronous code
console.log('===> below is example of Asynchronous code') 

fs = require('fs')
// let  bankai = readFile('vansh.txt','utf-8')        // uncomment  and try it it will throw  error hence we have make function and pass some  argument to make it work 


let  bankai = fs.readFile('vansh.txt','utf-8', (a, b)=>{
    console.log(a, b);
})  

// here above code is written as   let bankai = fs.readFile('vansh.txt','utf-8',(err,data)=>{ console.log(err,data)})

// in output above code will show null for err argument and content in given file here err stands for error argument

// this is a message will be displayed first because pehle fs.readFile file ko read karega uske baad function usko print  karega , and this process is called callback function.

console.log(bankai)
console.log('this is a message')