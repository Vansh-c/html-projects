console.log('this is tutuorial fifty three');

let name = "vansh";
console.log(name + ' is a good boy');

// let's see use of function

console.log('====>below is how one can use function')

function bankai(name,greettext= " greetings from javascript"){                     // here by writing greettext = "greetings from  javascript" we pass default value to greettext which will be written if there is no
    let name1 = "dhakdh"                             // ye jo name1 hai voh local variable hai jo bahar ke name1 ka kuch bhi nahi bigad sakta
    console.log(name + ' is  a good boy');
    console.log(greettext + " this is a text of good morning to " + name);
}

let name1 = "vansh";              // here in this both name1 and name2 function default value of greettext will be called which is greettext = 'greetings from javascript"
let name2 = "ichigo";

bankai(name1);
bankai(name2);
let greettext = "good morning";                  
bankai(name1,greettext);          // this  is called calling of function
bankai(name2,greettext);


// let's see use of return function in javascript

function sum(a,b,c){
    d= a + b + c
    return d;
    // below function will not be returned , it is unreachable code
    console.log('this text will not be executed')                      // the reason this statement will not be executed because after a value in a function is returned then uske baad koi bhi cheez likhi ho woh execute nahi hogi
}
    
sum(2,3,4)
console.log(d)     // this is one way to all function

var returnValue = sum(2,3,4)
console.log(returnValue)



// let's take more examples 

console.log('====> lets have a look at few more examples')

function greater(a,b){
    if(a>b){console.log("a is greater than b")}
    else if(a==b){console.log("a is equal to b")}
    else{console.log("a is lower than b")}
};

let seevalue = greater(4,5);
console.log(seevalue);

let x = greater(5,5);
console.log(x);

let y = greater(7,6);
console.log(y);


