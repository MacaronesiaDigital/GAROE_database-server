const stationsCtrl = {}
const Stations = require('../models/Stations');



stationsCtrl.getStations = async (req, res) => {
    const stations = await Stations.find()
    res.json (stations);
}


stationsCtrl.updateStations = async (req, res) => {
    const stations = new Stations()
    stations.data = req.body
    await Stations.deleteMany({})
    await stations.save()
    res.send({message: "Stations Updated"})
    console.log("Stations Updated")
}



module.exports = stationsCtrl;