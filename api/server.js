const express = require('express')
const server = express()
const leaderboard = require('./routes/leaderboard')
const cors = require('cors')

server.use(cors());
server.use(express.json());
server.use('/leaderboard', leaderboard)

server.get('/', (req, res) => {
  res.send('Hello World!')
});



module.exports = server
