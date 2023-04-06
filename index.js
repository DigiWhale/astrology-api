/* eslint-disable no-console */
const http = require('http')
const app = require('./app')

/**
 * Create HTTP server.
 */
const server = http.createServer(app)



server.listen(3001, () => {
  console.log('Server listening on port 3001');
});
