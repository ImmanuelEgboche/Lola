const express = require('express')
const cors = require('cors')
const server = express()

server.use(cors());
server.use(express,json());

servere.get('/', (req, res) => {
  res.send('Hello World!')
})



module.exports = server