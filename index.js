const express = require('express');
const cors = require('cors');
// const axios = require('axios');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.json());

// const allowedOrigins = ['http://localhost:3000', 'https://example.com', 'https://localhost:3000', 'https://themythicalfairy.com', 'http://www.themythicalfairy.com'];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };

// app.use(cors(corsOptions));

const api = require('./src/api');

app.use(api);

module.exports = app;

// /* eslint-disable no-console */
// const http = require('http')
// const app = require('./app')

// /**
//  * Create HTTP server.
//  */
// const server = http.createServer(app)

// /**
//  * Normalize a port into a number, string, or false.
//  */
// const normalizePort = (val) => {
//   const numericPort = parseInt(val, 10)

//   // eslint-disable-next-line no-restricted-globals
//   if (isNaN(numericPort)) {
//     // named pipe
//     return val
//   }

//   if (numericPort >= 0) {
//     // port number
//     return numericPort
//   }

//   return false
// }

// /**
//  * Get port from environment and store in Express.
//  */
// const port = normalizePort(process.env.PORT || '3001')
// app.set('port', port)

// /**
//  * Event listener for HTTP server "error" event.
//  */
// const onError = (error) => {
//   if (error.syscall !== 'listen') {
//     throw error
//   }

//   const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`

//   // handle specific listen errors with friendly messages
//   switch (error.code) {
//     case 'EACCES':
//       console.error(`${bind} requires elevated privileges`)
//       process.exit(1)
//       break
//     case 'EADDRINUSE':
//       console.error(`${bind} is already in use`)
//       process.exit(1)
//       break
//     default:
//       throw error
//   }
// }

// /**
//  * Event listener for HTTP server "listening" event.
//  */
// const onListening = () => {
//   const addr = server.address()
//   const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
//   console.log(`Listening on ${bind}`)
// }

// /**
//  * Listen on provided port, on all network interfaces.
//  */
// server.listen(port)
// server.on('error', onError)
// server.on('listening', onListening)
