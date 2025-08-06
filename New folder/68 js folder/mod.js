console.log('this is a module')

function average(arr){
    let sum = 0;
    arr.forEach(element =>{
        sum = sum + element;
    });

    return sum/arr.length

    
}


// module.exports = average 


module.exports = {
    avg:average,
    name:'vansh',
    port:'github'
}



// also try

// module.exports.name = 'Vansh Joshi'
// module.exports.port = 'githhub'
// module.exports.avg = average