const express = require('express');
const router = express.Router();
const controller = require('../controllers/playersController');

router.post('/:session_id/', controller.addPlayer);

router.get('/:session_id/', controller.getAllPlayers);

router.put('/:player_id/coins', controller.updateCoins);
router.put('/:player_id/stars', controller.updateStars);

router.delete('/:player_id/', controller.deletePlayer);

module.exports = router;