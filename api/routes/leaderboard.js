const express = require('express')
const router = express.Router();
router.use(express.json())
const leaderboardController = require('../controllers/leaderboard')

router.get('/', leaderboardController.index)
router.post('/', leaderboardController.create);

module.exports = router;
