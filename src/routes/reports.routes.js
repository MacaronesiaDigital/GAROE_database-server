const { Router } = require('express');
const router = Router();

const reportsCtrl = require('../controllers/reports.js')

router.get('/', reportsCtrl.getReports);
router.post('/', reportsCtrl.createReport);
module.exports = router;