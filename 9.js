let http = require('http');

let results = [];
let count = 0;

function httpGet(index){
    http.get(process.argv[2 + index], function(response){
        let string = "";

        response.on('data', function (data){
            string += data.toString();
        });

        response.on('end', function() {
            results[index] = string;
            count ++;
            if(count === 3){
                printResults();
            }
        });
        
    });
}

for (var i = 0; i < 3; i++) {
    httpGet(i);
}

function printResults () {
    for (var i = 0; i < 3; i++) {
        console.log(results[i]);
    }
}