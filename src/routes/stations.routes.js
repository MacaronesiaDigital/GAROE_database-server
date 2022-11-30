const { Router } = require('express');
const router = Router();

const stationsCtrl = require('../controllers/stations.controller.js')

router.get('/', stationsCtrl.getStations);
router.post('/', stationsCtrl.updateStations);
module.exports = router;