let net = require('net');

let port = process.argv[2];

let server = net.createServer(function listener(socket){
    // 2013-07-06 17:42
    let date = new Date();
    let data = date.getFullYear() + '-' + 
        getTwoDigits(date.getMonth()+1) + "-" + 
        getTwoDigits(date.getDate()) + " " + 
        getTwoDigits(date.getHours()) + ":" + 
        getTwoDigits(date.getMinutes()) + "\n";
    socket.write(data);
    socket.end();
});

server.listen(port);

function getTwoDigits(number){
    return ("0" + number.toString()).slice(-2);
}