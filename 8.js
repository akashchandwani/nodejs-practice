let http = require('http');

let url = process.argv[2];

http.get(url, function(response){
    let string = "";

    response.on('data', function(data){
        string += data.toString();
    });

    response.on('end', function() {
        console.log(string.length);
        console.log(string)
    });
});