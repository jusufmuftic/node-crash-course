const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Home page')
    }
    if(req.url === '/about') {
        res.write('O nama...')
    }
    res.end('Dze ces')
    })

server.listen(3000, () => {
    console.log('listening for requests on port 3000...')
})

let path = './html/'
switch(req.url) {
    case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
    case '/about-me':
        res.statusCode = 301;
        res.setHeader('Location', '/about');
        res.end();
        break;
    default:
        path += '404.html';
        res.statusCode = 404;
        break;
}




