
let http = require('http');

let url = process.argv[2];

http.get(url, function (response){
    response.on("data", function(data){
        console.log(data.toString());
    });

    response.on("error", function(error){
        console.log(error);
    });

    response.on("end", function(){
        // console.log("connection terminated!");
    });
});