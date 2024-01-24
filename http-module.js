const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our Home page!')
    }
    if(req.url === '/about') {
        res.end('This is a little bit about us:')
    }
    res.end('Ne valja')
})

server.listen(5000)

