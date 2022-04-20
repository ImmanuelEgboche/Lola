const express = require('express')
const cors = require('cors')
const server = express()

server.use(cors());
server.use(express.json());

const leaderRoute = require('./routes/leaderboard')

server.use('/leaderboard', leaderRoute)

server.get('/', (req, res) => {
  res.send('Hello World!')
})



module.exports = server
