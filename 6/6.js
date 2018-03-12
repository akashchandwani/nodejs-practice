let file = require('./file');

let path = process.argv[2];
let extension = process.argv[3];

file(path, extension, print);

function print(err, array){
    if(err) console.log("there was an error");
    array.forEach(element => {
       console.log(element); 
    });
}