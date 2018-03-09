let fs = require('fs');

if(process.argv.length < 4){
    console.log("error");
    return;
}

let path = process.argv[2];
let extention = process.argv[3];


function printSpecificFiles (callback, callback2){
    fs.readdir(path, function (err, data) {
        if(err)
            return console.log(err);
        callback(data, callback2);
    });
}

function filterData(data, callback) {
    let filteredData = data.filter(function(element){
        let i = element.lastIndexOf('.');
        if(i == -1){
            return false;
        }
        //console.log(element.substr(i+1,element.length) === extention);
        // Note for future - use path module :P
        return element.substr(i+1,element.length) === extention;
    });
    callback(filteredData);
}

function printArrayData(data){
    data.forEach(element => {
        console.log(element);
    });
}

printSpecificFiles(filterData, printArrayData);