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

module.exports = { index }
