const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    
    if(url === '/' || url === '/home') {
        const readStream = fs.createReadStream('./static/index.html');
        res.writeHead(200, {'Content-type': 'text/html'});
        readStream.pipe(res);
    }
    else {
        const readStream = fs.createReadStream('./static/components/err/err404.html');
        res.writeHead(404, 'Content-type', 'text/html');
        readStream.pipe(res);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
