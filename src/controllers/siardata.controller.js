const siarDataCtrl = {}
const Siardata = require('../models/Siardata');


siarDataCtrl.getStations = async (req, res) => {
    const siardata = await Siardata.find()
    res.json (siardata);
}

siarDataCtrl.updateStations = async (req, res) => {
    const siardata = new Siardata()
    siardata.data = req.body
    await Siardata.deleteMany({})
    await siardata.save()

    res.send({message: "Siar Updated"})
    console.log("Siar Updated")
}



module.exports = siarDataCtrl;