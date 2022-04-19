const Player = require('../models/leaderboard')

// index
async function index(req, res) {
    try {
        const player = await Player.all;
        const scores = await player.scores;
        res.status(200).json({ ...player, scores });
    } catch (err) {
        res.status(500).send(err);
    };
}

async function create(req,res) {
    try{
    const leaderboard = await leaderboard.create(req.all)
    res.status(200).json(leaderboard);
    } catch (err) {
        res.status(500).send(err);
    };
}



module.exports = { index, create }
