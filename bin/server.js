'use strict'

const app = require('../src/app')
const http = require('http')
const debug = require('debug')('api-node-mongo:server')



const port = normalizePort(process.env.PORT || '3000')
app.set('port', port);

const server = http.createServer(app)



server.listen(port)
server.on('error',onError)
server.on('listening', onListenting)

console.log(' API rodando na porta ' + port)

function normalizePort (val) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    return val
  }
  if (port >= 0 ) {
    return port
  }
  
  return false
}

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACESS':
      console.error(bind + 'precisa de privelégios elevados')
      process.exit(1)
      return 0
      case 'EADDRINUSE':
        console.error(bind + ' ja esta em uso')
        process.exit(1)
        return 0
      default:
        throw error
  }
}

function onListenting () {
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'Pipe ' + addr : 'port ' + addr.port
  debug('Listening on ' + bind)

}