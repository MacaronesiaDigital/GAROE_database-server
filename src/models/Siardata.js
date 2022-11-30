
const { Schema, model} = require('mongoose')

const siarDataSchema = new Schema({
    data: {type: Object, required: false},

},{
    timestamps: true,
    versionKey: false
})

module.exports = model("SiarData", siarDataSchema)