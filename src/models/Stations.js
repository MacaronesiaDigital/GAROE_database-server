

const { Schema, model} = require('mongoose')

const stationsSchema = new Schema({
    data: {type: Object, required: false},


},{

    timestamps: true,
    versionKey: false

})


module.exports = model("Stations", stationsSchema)