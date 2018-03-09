var fs = require('fs');

let str = fs.readFileSync(process.argv[2]).toString();

let length = str.split('\n').length - 1;
console.log(length);