const express = require('express');
const router = express.Router();
const controller = require('../controllers/sessionsController');

router.post('/', controller.createSession);

router.get('/', controller.getSession);

router.delete('/', controller.deleteSession);

module.exports = router;