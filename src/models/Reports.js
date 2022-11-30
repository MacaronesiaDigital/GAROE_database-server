const { Schema, model} = require('mongoose')

const reportsSchema = new Schema({
    data: {type: Object, required: false},
},{

    timestamps: true,
    versionKey: false
})
module.exports = model("Reports", reportsSchema)