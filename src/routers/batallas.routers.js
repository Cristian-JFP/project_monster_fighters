const express = require('express');

const router = express.Router();

const ctrlBatallas = require('../controllers/batallas.controller');

router.post('/', ctrlBatallas.create);

router.get('/:id', ctrlBatallas.getById);

router.get('/:id/state', ctrlBatallas.getState);

router.post('/:id/move', ctrlBatallas.move);

router.post('/:id/switch', ctrlBatallas.switchCreature);

router.post('/:id/item', ctrlBatallas.useItem);

router.post('/:id/forfeit', ctrlBatallas.forfeit);

router.get('/:id/history', ctrlBatallas.getHistory);

module.exports = router;