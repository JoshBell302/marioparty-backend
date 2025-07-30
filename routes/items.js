const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemsController');

router.post('/:session_id/', controller.addItem);

router.get('/:session_id/', controller.getAllItems);

router.delete('/:player_id/', controller.deleteItem);

module.exports = router;