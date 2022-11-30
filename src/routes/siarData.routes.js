const { Router } = require('express');
const router = Router();

const siardataCtrl = require('../controllers/siardata.controller.js')

router.get('/', siardataCtrl.getStations);
router.post('/', siardataCtrl.updateStations);
module.exports = router;