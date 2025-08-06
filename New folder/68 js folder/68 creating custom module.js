// const mod = require('./mod')                                       // idhar mod vo variable hai jo ki mod module export karta hai vo ismein store ho jati hai
// console.log(mod)
// console.log('this is 68 . creating custom modue.js file')          // run this both uncommenting this and after uncommenting module.export=average


// const average = require('./mod')                                    
// console.log(average([3,4]))
// console.log('this is 68 . creating custom modue.js file')          // run this after uncommenting module.export = average

 
const mod = require('./mod')
console.log(mod.avg([3,4]))
console.log(mod.name)
console.log(mod.port)
console.log('this is 68.creating custom mod js file')