const Player = require('../models/leaderboard')

// Gets all routes
async function index(req, res) {
    try {
        
        const player = await Player.all;
        console.log(player)
        const scores = await player.scores; // undefinded
        console.log(`This is scores: ${scores}`)
        res.status(200).json({ ...player});
    } catch (err) {
        res.status(500).send(err);
    };
}

async function create( req, res) {
    try {
        const player = await Player.create({username: req.body.username, score: req.body.score});
        res.status(201).json(player)
    } catch (err) {
        res.status(500).send({err});
    }
}

module.exports = { index, create }
