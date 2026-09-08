const express = require('express');

const router = express.Router();

const ctrlRanking = require('../controllers/ranking.controller');

router.get('/', ctrlRanking.getRanking);

router.get('/global', ctrlRanking.getGlobalStats);

module.exports = router;