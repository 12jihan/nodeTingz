const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

//~~~~~~~~~~ HTML Pages Start ~~~~~~~~~~//
const homePage = fs.createReadStream('./static/index.html');
const errPage = fs.createReadStream('./static/components/err/err404.html');

//~~~~~~~~~~ HTML Pages End ~~~~~~~~~~//



const server = http.createServer((req, res) => {
    
    if(req.url === '/') {
        res.writeHead(200, {'Content-type': 'text/html'});
        homePage.pipe(res);
    }
    else {
        res.writeHead(404, 'Content-type', 'text/html');
        errPage.pipe(res);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});