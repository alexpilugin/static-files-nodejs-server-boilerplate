var static = require('node-static');

var fileServer = new static.Server('./public');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response, function (err, res) {
            if (err) { // An error as occured
                console.error("> Error serving " + request.url + " - " + err.message);
                response.writeHead(err.status, err.headers);
                response.end();
            } else { // The file was served successfully
                console.log("> " + request.url + " - " + res.message);
            }
        });
    }).resume();
}).listen(3030);

console.log('Navigate to http://localhost:3030/');