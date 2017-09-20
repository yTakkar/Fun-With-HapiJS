const 
    Hapi = require('hapi'),
    hl = require('handy-log'),
    server = new Hapi.Server()

server.connection({
    host: 'localhost',
    port: 4800
})

server.route({
    method: 'GET',
    path: '/',
    handler: (req, res) => {
        res('Hello, World!!')
    }
})

server.route({
    method: 'GET',
    path: '/user/{username}',
    handler: (req, res) => {
        res(`Hello, ${req.params.username}`)
    }  
})

server.start(err => {
    if(err){
        throw err
    }
    hl.rainbow(`App running at ${server.info.port}`)
})