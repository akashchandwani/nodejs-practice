let fs = require('fs');
let path = require('path');

module.exports = function (dirPath, extension, callback) {
    fs.readdir(dirPath, function(err, content) {
        if(err) return callback(err);
        let filteredData = content.filter(function(element){
            return '.'+extension === path.extname(element);
        });
        callback(null, filteredData);
    });
}