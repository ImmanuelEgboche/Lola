const express = require('express')
const cors = require('cors')

const server = express()

server.use(cors())

/*   

Routes

*/

server.get('/', (req, res) => res.send('Hi lola'))

module.exports = server