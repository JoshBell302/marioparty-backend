const express = require('express');
const router = express.Router();
const controller = require('../controllers/playersController');

router.post('/:session_id/', controller.addPlayer);
router.get('/:session_id/', controller.getAllPlayers);
router.put('/:id/coins', controller.updateCoins);
router.put('/:id/stars', controller.updateStars);

module.exports = router;