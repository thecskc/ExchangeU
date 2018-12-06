const express = require('express');

const router = express.Router();

const sessionController = require('../controllers/sessionController');

/// Session Routes ///

router.post('/createassignment', sessionController.session_create_assignment);


module.exports = router;
