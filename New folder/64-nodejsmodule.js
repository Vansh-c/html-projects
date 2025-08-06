const fs =      require('fs');
let text = fs.readFileSync('vansh.txt', 'utf-8')   ;          // readFileSync: reads file synchronously 
console.log('the content of the file is ');
console.log(text);


// here above we used fs module , here fs stands for file system module

text = text.replace('hello','good morning guys ');
console.log(text);


console.log('creating a new file');
fs.writeFileSync('krishna.txt',text);               // writeFileSync: Used to  write new file here , its syntax is fs.writeFileSync('filename',text)