const reportsCtrl = {}
const Reports = require('../models/Reports');

reportsCtrl.getReports = async (req, res) => {
    const reports = await Reports.find()
    res.json (reports);
}

reportsCtrl.createReport = async (req, res) => { 
    const newReport = new Reports(req.body)
    await newReport.save()
    res.send({message: "Report Created"})
}

module.exports = reportsCtrl;