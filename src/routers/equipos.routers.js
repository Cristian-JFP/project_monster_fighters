const express = require('express');

const router = express.Router();

const ctrlEquipos = require('../controllers/equipos.controller');

router.get('/', ctrlEquipos.getAll);

router.post('/', ctrlEquipos.create);

router.get('/:id', ctrlEquipos.getById);

router.put('/:id', ctrlEquipos.update);

router.delete('/:id', ctrlEquipos.remove);

router.get('/:id/creatures', ctrlEquipos.getCreatures);

router.post('/:id/creatures', ctrlEquipos.addCreature);

router.delete(
    '/:id/creatures/:creature_id',
    ctrlEquipos.removeCreature
);

router.post(
    '/:id/creatures/:creature_id/item',
    ctrlEquipos.equipItem
);

router.delete(
    '/:id/creatures/:creature_id/item',
    ctrlEquipos.removeItem
);

router.get('/:id/validate', ctrlEquipos.validate);

module.exports = router;